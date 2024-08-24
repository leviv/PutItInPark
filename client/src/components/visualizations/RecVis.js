import React from "react";
import * as d3 from "d3";
import { formatNumber, displayName, slugName } from "../helpers/Helpers.js";
import NotFound from "../NotFound";

import { API_ENDPOINT } from "../helpers/Helpers.js";
import { fakeFetch } from "../fake_api/fakeApi.js";
const endpoint = API_ENDPOINT + "/recreations";

class RecVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recs: [],
      rec: null,
      activities: [],
      loaded: false,
    };
  }

  makeApiCall() {
    // fetch(endpoint)
    fakeFetch(endpoint, "/recreations/", null, null, null)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.objects.forEach((rec) => {
          rec.activities = rec.activities.split(",");

          rec.activities.forEach((activity) => {
            if (activity !== "") {
              // See if the activity already exists in the state
              let index = -1;
              for (let i = 0; i < this.state.activities.length; i++) {
                const curActivity = this.state.activities[i];
                if (curActivity.name === activity) {
                  index = i;
                }
              }

              // Add a new activity
              if (index === -1) {
                this.state.activities.push({ name: activity, count: 0 });
                index = this.state.activities.length - 1;
              }

              // Update the activity count - we setState at the end of the for loop so we can mutate state directly here
              // eslint-disable-next-line react/no-direct-mutation-state
              this.state.activities[index].count++;
            }
          });

          this.state.recs.push(rec);
        });
      })
      .then(() => {
        this.setState({ loaded: true });
        this.plotRecs();
      });
  }

  plotRecs() {
    // Set up the svg container
    const chart = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 960 550")
      .attr("stroke", "#fff")
      .attr("fill", "#fed892")
      .classed("svg-content", true);

    const pack = (data) =>
      d3
        .pack()
        .size([960 - 2, 550 - 2])
        .padding(3)(d3.hierarchy({ children: data }).sum((d) => d.count));

    const root = pack(this.state.activities);

    const leaf = chart
      .selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", (d) => `translate(${d.x + 1},${d.y + 1})`);

    // Append the tooltip
    let div = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    leaf
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill-opacity", 0.7)
      .attr("stroke-width", "0px")
      .style("cursor", "pointer")
      .on("mouseover", function (d, i) {
        // Slightly expand the circle
        d3.select(this)
          .transition()
          .duration(200)
          .attr("stroke", "#264653")
          .attr("stroke-width", "3px");

        // Fade in the tooltip
        div.transition().duration(200).style("opacity", "1");

        // Set the position of the tooltip
        div
          .html(displayName(d.data.name) + "<br/>" + formatNumber(d.data.count))
          .style("left", d3.event.pageX + 5 + "px")
          .style("top", d3.event.pageY - 5 + "px");
      })
      .on("mouseout", function (d, i) {
        // Shrink the circle back
        d3.select(this).transition().duration(200).attr("stroke-width", "0px");

        // Fade out the tooltip
        div.transition().duration(200).style("opacity", 0);
      });

    leaf
      .append("text")
      .text(function (d) {
        return displayName(d.data.name);
      })
      .style("fill", "#000")
      .style("pointer-events", "none")
      .style("font-size", function (d) {
        return d.r / 3;
      })
      .attr("text-anchor", "middle")
      .attr("stroke", "none");
  }

  /**
   * Function to get the state information based on a state id
   */
  getState(id) {
    // Convert the id to a name
    const stateName = this.state.names[id];

    for (let i = 0; i < this.state.states.length; i++) {
      const state = this.state.states[i];

      // The state names match
      if (slugName("", state.name) === slugName("", stateName)) {
        return state;
      }
    }

    return undefined;
  }

  /**
   * Function to get the color of an individual state based on the number of
   * national parks and recreational areas in the state
   */
  getStateColor(id) {
    // Build color scale
    const myColor = d3
      .scaleLinear()
      .range(["#eeeeee", "#264653"])
      .domain([2, 40]);

    // Check if we had data for the state id
    const state = this.getState(id);
    if (state) {
      return myColor(state.num_parks + state.numrec);
    } else {
      return 2;
    }
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    if (!this.state.loaded) {
      return <NotFound />;
    } else {
      return (
        <React.Fragment>
          <br />
          <br />
          <h3 className="text-center">
            <span>Recreational area activities</span>
          </h3>
          <div className="row">
            <div ref="canvas" className="col-md-12"></div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default RecVis;
