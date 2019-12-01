import React from 'react'
import * as d3 from 'd3';
import NotFound from '../NotFound';

const API_ENDPOINT = 'https://api.foodcravings.net/api/restaurant?page%5Bsize%5D=50&page%5Bnumber%5D=1'

class RestaurantVis extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        cuisineCounts: {},
        cuisines: [],
        loaded: false
      };
    }

    makeApiCall() {
        fetch(API_ENDPOINT)
        // Transform the data into json
        .then((resp) => resp.json())
        .then((data) => {
            data.data.forEach((rest) => {
                rest.attributes.cuisines.forEach((c) => {
                    if (this.state.cuisineCounts[c] === undefined) {
                        this.state.cuisineCounts[c] = 1;
                    } else {
                        this.state.cuisineCounts[c]++;
                    }
                })
            });

            Object.keys(this.state.cuisineCounts).forEach((k) => {
                if (this.state.cuisineCounts[k] > 1){
                    this.state.cuisines.push({
                        name: k,
                        count: this.state.cuisineCounts[k]
                    });
                }
            });
            this.state.cuisines.pop();
            this.state.cuisines.pop();
        }).then(() => {
            this.setState({loaded: true});
            this.plotRestaurants();
        });
    }

    plotRestaurants() {
        let margin = ({top: 20, right: 0, bottom: 30, left: 40});
        let width = 960;
        let height = 600;
        let x = d3.scaleBand()
          .domain(this.state.cuisines.map(d => d.name))
          .range([margin.left, width - margin.right])
          .padding(0.1);

        let y = d3.scaleLinear()
          .domain([0, d3.max(this.state.cuisines, d => d.count)]).nice()
          .range([height - margin.bottom, margin.top]);

        let xAxis = g => g
          .attr("transform", `translate(0,${height - margin.bottom})`)
          .call(d3.axisBottom(x)
            .tickSizeOuter(0));

        let yAxis = g => g
          .attr("transform", `translate(${margin.left},0)`)
          .call(d3.axisLeft(y))
          .call(g => g.select(".domain").remove());

        const svg = d3.select(this.refs.canvas)
          .append("svg")
          .attr('preserveAspectRatio', 'xMinYMin meet')
          .attr('viewBox', '0 0 960 600')
          .classed('svg-content', true)

        svg.append("g")
          .attr("fill", "#2A9D8F")
          .selectAll("rect").data(this.state.cuisines).enter().append("rect")
          .attr("x", d => x(d.name))
          .attr("y", d => y(d.count))
          .attr("height", d => y(0) - y(d.count))
          .attr("width", x.bandwidth());

        svg.append("g")
          .call(xAxis);

        svg.append("g")
          .call(yAxis);
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
              <h3 className="text-center"><span>Cuisine Frequency</span></h3>

              <div className="row">
                <div ref="canvas" className="col-md-12"></div>
              </div>
            </React.Fragment>
          );
        }
    }
}
export default RestaurantVis
