import React from "react";
import * as d3 from "d3";
import { geoAlbersUsa } from "d3-geo";
import { feature } from "topojson-client";
import us from "../../assets/us.json";
import stateNames from "../../assets/us-state-names.tsv";
import { formatNumber, slugName } from "../helpers/Helpers.js";
import NotFound from "../NotFound";
import StateCard from "../state/StateCard";

import { API_ENDPOINT } from "../helpers/Helpers.js";
import { fakeFetch } from "../fake_api/fakeApi.js";
const endpoint = API_ENDPOINT + "/locations";

class StateVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      states: [],
      state: null,
      names: null,
      park: null,
      loaded: false,
    };
  }

  makeApiCall() {
    // fetch(endpoint)
    fakeFetch(endpoint, "/locations/", null, null, null)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.objects.forEach((state) => {
          this.state.states.push(state);
        });
      })
      .then(() => {
        // Add the mapping from ids to state names
        let names = {};
        d3.tsv(stateNames, function (d) {
          names[d.id] = d.name;
        }).then(() => {
          this.setState({ names });
          this.setState({ loaded: true });
          this.plotStates();
        });
      });
  }

  plotStates() {
    // Set up the svg container
    const chart = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 960 600")
      .attr("stroke", "#fff")
      .attr("fill", "#264653")
      .classed("svg-content", true);

    // Append the tooltip
    let div = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Avoid confusing 'this'
    let self = this;

    // Plot all of the states
    const projection = geoAlbersUsa();
    chart
      .selectAll("g")
      .data(feature(us, us.objects.states).features)
      .enter()
      .append("path")
      .attr("class", "states")
      .style("cursor", "pointer")
      .style(
        "fill",
        function (d) {
          return this.getStateColor(d.id);
        }.bind(this)
      )
      .attr("d", d3.geoPath().projection(projection))
      .on("mouseover", function (d, i) {
        // Slightly expand the circle
        d3.select(this).transition().duration(200).style("fill-opacity", ".7");

        // Fade in the tooltip
        div.transition().duration(200).style("opacity", "1");

        const state = self.getState(d.id);

        // Set the position of the tooltip
        div
          .html(formatNumber(state.num_parks + state.numrec))
          .style("left", d3.event.pageX + 5 + "px")
          .style("top", d3.event.pageY - 5 + "px");
      })
      .on("mouseout", function (d, i) {
        // Shrink the circle back
        d3.select(this).transition().duration(200).style("fill-opacity", "1");

        // Fade out the tooltip
        div.transition().duration(200).style("opacity", 0);
      })
      .on("click", function (d, i) {
        self.setState({ state: self.getState(d.id) });
      });
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
            <span>States by number of parks and recreation areas</span>
          </h3>
          <div className="row">
            <div ref="canvas" className="col-md-9"></div>
            <div className="col-md-3 instance-container align-self-center">
              {this.state.state === null ? (
                <h4>Click a state to explore!</h4>
              ) : (
                <StateCard
                  name={this.state.state.name}
                  imglink={this.state.state.imglink}
                  num_parks={this.state.state.num_parks}
                  numrec={this.state.state.numrec}
                  pop={this.state.state.pop}
                  mail_code={this.state.state.mail_code}
                />
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default StateVis;
