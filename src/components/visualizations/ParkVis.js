import React from 'react'
import * as d3 from 'd3';
import {geoAlbersUsa, path} from 'd3-geo';
import {feature} from 'topojson-client';
import us from '../../assets/us.json';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks";

class ParkVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: [],
      loaded: false,
    };
  }

  makeApiCall() {
    fetch(API_ENDPOINT)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.objects.forEach((park) => {
          park.rec_ids = park.rec_ids.split(",");
          this.state.parks.push(park);
        });
      }).then(() => {
        this.setState({loaded: true});
        this.plotParks();
      });
  }

  drawState (stateData, index) {
    return (
      <path
        className="someCSSClass"
        style={{cursor: "pointer", fill: "orange"}}
        key={index}
        stroke="#fff"
        strokeWidth="3px"
        d={stateData.shape}
        onMouseOver={(event) => {
            event.target.style.fill = 'red'
        }}
        onMouseOut={(event) => {
            event.target.style.fill = 'orange'
        }}
      >
      </path>
    );
  }

  plotParks() {
    // Set up the svg container
    const chart = d3.select(this.refs.canvas)
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 960 600')
    .attr('stroke', '#fff')
    .classed('svg-content', true)
    .style('border', '1px solid black')
    .style('cursor', 'pointer')

    // Plot all of the states
    const projection = geoAlbersUsa();
    chart.append("path")
    .datum(feature(us, us.objects.states))
    .attr("d", d3.geoPath().projection(projection));

    // Plot all of the national parks
    chart.selectAll('circle')
    .data(this.state.parks).enter().append('circle')
    .attr('r', 5)
    .attr('fill', 'red')
    .attr('cx', function(d) { return projection([d.lon, d.lat])[0] })
    .attr("cy", function(d) { return projection([d.lon, d.lat])[1] });
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    if (!this.state.loaded) {
        return <div>Loading...</div>
    } else {
      return (
        <div ref="canvas"></div>
      );
    }
  }
}

export default ParkVis
