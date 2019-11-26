import React from 'react'
import * as d3 from 'd3';
import {geoAlbersUsa} from 'd3-geo';
import {feature} from 'topojson-client';
import us from '../../assets/us.json';
import stateNames from '../../assets/us-state-names.tsv';
import {formatNumber, slugName} from '../helpers/Helpers.js'
import NotFound from '../NotFound';
import StateCard from '../state/StateCard';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations";

class StateVis extends React.Component {
  constructor(props) {
    super(props);

    let names = {};
    d3.tsv(stateNames, function(d){
      names[d.id] = d.name;
    });

    this.state = {
      states: [],
      state: null,
      names: names,
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
        data.objects.forEach((state) => {
          this.state.states.push(state);
        });
      }).then(() => {
        this.setState({loaded: true});
        this.plotStates();
      });
  }

  plotStates() {
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
    chart.selectAll('g')
      .data(feature(us, us.objects.states).features)
      .enter()
      .append('path')
      .attr('class', 'states')
      .style('fill', function(d) {
        return this.getStateColor(this.state.names[d.id])
      }.bind(this))
      .attr('d', d3.geoPath().projection(projection));
  }

  getStateColor(stateName) {
    console.log(stateName);
    if (stateName !== undefined) {
      // Build color scale
      const myColor = d3.scaleLinear()
        .range(["#eeeeee", "#264653"])
        .domain([2,40]);

      let num = 111;

      for (let i = 0; i < this.state.states.length; i++) {
        const state = this.state.states[i];

        if (slugName('', state.name) === slugName('', stateName)) {
          num = state.num_parks + state.numrec;
        }
      }

      return myColor(num);
    }
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
          <h3 className="text-center"><span>States by number of parks and recreation areas</span></h3>
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

export default StateVis
