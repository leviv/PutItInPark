import React from "react";
import * as d3 from "d3";
import { geoAlbersUsa } from "d3-geo";
import { feature } from "topojson-client";
import us from "../../assets/us.json";
import NotFound from "../NotFound";
import { withRouter } from "react-router-dom";
import {
  API_ENDPOINT,
  encodeToBase26,
  slugName,
  displayName,
} from "../../helpers/Helpers.js";
import { fakeFetch } from "../../fake_api/fakeApi.js";

const parkEndpoint = API_ENDPOINT + "/nationalparks";
const recEndpoint = API_ENDPOINT + "/recreations";
const HOVER_SCALE = 1.2;
const REC_RADIUS = 5;
const PARK_RADIUS = 10;

class HomeVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: [],
      park: null,
      recs: [],
      rec: null,
      loaded: false,
      chart: null,
    };
  }

  makeApiCall() {
    fakeFetch(parkEndpoint)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.objects.forEach((park) => {
          park.rec_ids = park.rec_ids.split(",");
          this.state.parks.push(park);
        });
      })
      .then(() => {
        fakeFetch(recEndpoint)
          // Transform the data into json
          .then((resp) => resp.json())
          .then((data) => {
            // Process data
            data.objects.forEach((rec) => {
              rec.activities = rec.activities.split(",");
              this.state.recs.push(rec);
            });
          })
          .then(() => {
            this.setState({ loaded: true });
            this.plotParks();
          });
      });
  }

  recursion() {
    // Randomly select a park or rec data
    var data;
    var id;
    var radius;
    if (Math.random() > 0.5) {
      data =
        this.state.parks[Math.floor(Math.random() * this.state.parks.length)];
      id = data.park_name;
      radius = PARK_RADIUS;
    } else {
      data =
        this.state.recs[Math.floor(Math.random() * this.state.recs.length)];
      id = data.rec_name;
      radius = REC_RADIUS;
    }

    const locationNode = this.state.chart.selectAll(
      "circle#" + encodeToBase26(id)
    );
    if (locationNode) {
      locationNode.transition().duration(200).attr("r", 35);
      // Bring the selected circle to the front
      locationNode.each(function () {
        this.parentNode.appendChild(this);
      });
    }

    this.props.handleDataVisData({
      locationName: displayName(id),
      imgURL: data.imglink,
    });

    // Repeat every 5 seconds
    window.setTimeout(() => {
      this.state.chart
        .selectAll("circle#" + encodeToBase26(id))
        .transition()
        .duration(200)
        .attr("r", radius);
      this.recursion();
    }, 5000);
  }

  plotParks() {
    // Set up the svg container
    const chart = d3
      .select(this.refs.canvas)
      .append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 960 600")
      .attr("stroke", "#fff")
      .attr("fill", "#264653")
      .classed("svg-content", true);

    this.setState({
      chart: chart,
    });

    // Plot all of the states
    const projection = geoAlbersUsa();
    chart
      .selectAll("g")
      .data(feature(us, us.objects.states).features)
      .enter()
      .append("path")
      .attr("class", "states")
      .attr("d", d3.geoPath().projection(projection));

    // Append the tooltip
    let div = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Plot all of the rec areas
    chart
      .selectAll("circle.rec")
      .data(this.state.recs)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return projection([d.lon, d.lat])[0];
      })
      .attr("cy", function (d) {
        return projection([d.lon, d.lat])[1];
      })
      .attr("id", (d) => encodeToBase26(d.rec_name))
      .attr("fill", "#FED892")
      .attr("r", REC_RADIUS);

    // Plot all of the park areas
    chart
      .selectAll("circle.park")
      .data(this.state.parks)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return projection([d.lon, d.lat])[0];
      })
      .attr("cy", function (d) {
        return projection([d.lon, d.lat])[1];
      })
      .attr("id", (d) => encodeToBase26(d.park_name))
      .attr("fill", "#fff")
      .attr("r", PARK_RADIUS);

    chart
      .selectAll("circle")
      .attr("stroke", "#000")
      .style("cursor", "pointer")
      .on("mouseover", function (d, _i) {
        var currentRadius = d3.select(this).attr("r");
        var name = d.park_code ? d.park_name : d.rec_name;

        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", currentRadius * HOVER_SCALE);

        // Fade in the tooltip
        div.transition().duration(200).style("opacity", 1);

        // Set the position of the tooltip
        div
          .html(displayName(name))
          .style("left", d3.event.pageX + 20 + "px")
          .style("top", d3.event.pageY - 15 + "px");
      })
      .on("mouseout", function (_d, _i) {
        var currentRadius = d3.select(this).attr("r");

        // Shrink the circle back
        d3.select(this)
          .transition()
          .duration(200)
          .attr("r", currentRadius / HOVER_SCALE);

        // Fade out the tooltip
        div.transition().duration(200).style("opacity", 0);
      })
      .on("click", (d, _i) => {
        if (d.park_code) {
          this.props.history.push(slugName("/park/", d.park_name));
        } else {
          this.props.history.push(slugName("/recreation/", d.rec_name));
        }

        // Fade out the tooltip
        div.transition().duration(200).style("opacity", 0);
      });

    this.recursion();
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
          <div className="vis-container">
            <div className="row">
              <div ref="canvas" className="col-md-12"></div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default withRouter(HomeVis);
