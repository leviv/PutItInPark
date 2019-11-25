import React from 'react'
import * as d3 from 'd3';
import {geoAlbersUsa, path} from 'd3-geo';
import {feature} from 'topojson-client';
import us from '../../assets/us.json';
import NotFound from '../NotFound';
import ParkCard from '../park/ParkCard';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks";

class ParkVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parks: [],
      park: null,
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

  plotParks() {
    // Set up the svg container
    const chart = d3.select(this.refs.canvas)
    .append('svg')
    .attr('preserveAspectRatio', 'xMinYMin meet')
    .attr('viewBox', '0 0 960 600')
    .attr('stroke', '#fff')
    .attr('fill', '#264653')
    .classed('svg-content', true)

    // Plot all of the states
    const projection = geoAlbersUsa();
    chart.append("path")
    .datum(feature(us, us.objects.states))
    .attr("d", d3.geoPath().projection(projection));

    // Plot all of the national parks 11421,200 14,937
    chart.selectAll('circle')
    .data(this.state.parks).enter().append('circle')
    .attr('r', function(d) {return (d.visitors - 14937) / 11406263 * 20 + 7})
    .attr('fill', '#FED892')
    .attr('stroke', '#000')
    .attr('cx', function(d) { return projection([d.lon, d.lat])[0] })
    .attr("cy", function(d) { return projection([d.lon, d.lat])[1] })
    .style('cursor', 'pointer')
    .on('mouseover', function(d, i) {
      d3.select(this)
        .transition(.2)
        .duration(100)
        .attr('r', (d.visitors - 14937) / 11406263 * 20 + 9);
    })
    .on('mouseout', function(d, i) {
      d3.select(this)
        .transition(.2)
        .duration(100)
        .attr('r', (d.visitors - 14937) / 11406263 * 20 + 7);
    })
    .on('click', function(d, i) {
      this.setState({park: d});
      d3.selectAll('circle').transition(.2).duration(100).attr('fill', '#FED892');
      //d3.select(this).transition(.2).duration(100).attr('fill', '#2A9D8F');

    }.bind(this))
  }

  componentDidMount() {
    this.makeApiCall();
  }

  render() {
    if (!this.state.loaded) {
        return <NotFound />
    } else {
      return (
        <React.Fragment>
          <br/><br/>
          <h3 className="text-center"><span>National parks by annual visitors</span></h3>
          <div className="row">

            <div ref="canvas" className="col-md-9"></div>
            <div className="col-md-3 instance-container align-self-center">
              {this.state.park === null ? (
                <h4>Click a park to explore!</h4>
              ) : (
                <ParkCard
                  park_name={this.state.park.park_name}
                  imglink={this.state.park.imglink}
                  location={this.state.park.location}
                  num_rec={this.state.park.num_rec}
                  fee={this.state.park.fee}
                  visitors={this.state.park.visitors}
                />
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ParkVis
