import React from 'react'
import * as d3 from 'd3';
import NotFound from '../NotFound';

const API_ENDPOINT = 'https://api.foodcravings.net/api/nutrition_label'

class NutritionVis extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        data: [],
        numLabels: 0.0,
        calcium: 0.0,
        carbohydrates: 0.0,
        cholesterol: 0.0,
        fat: 0.0,
        fiber: 0.0,
        iron: 0.0,
        protein: 0.0,
        saturatedFat: 0.0,
        sodium: 0.0,
        sugars: 0.0,
        loaded: false
      };
    }

  makeApiCall() {
    fetch(API_ENDPOINT)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        this.state.numLabels = data.data.length;
        data.data.forEach((label) => {
          this.state.calcium += Math.max(label.attributes.calcium / 1000, 0); //CA
          this.state.carbohydrates += Math.max(label.attributes.carbohydrates, 0); //C
          this.state.cholesterol += Math.max(label.attributes.cholesterol / 1000, 0); //CH
          this.state.fat += Math.max(label.attributes.fat, 0); //F
          this.state.fiber += Math.max(label.attributes.fiber, 0); //FI
          this.state.iron += Math.max(label.attributes.iron / 1000, 0); //I
          this.state.protein += Math.max(label.attributes.protein, 0);  //P
          this.state.saturatedFat += Math.max(label.attributes.saturatedFat, 0); //SF
          this.state.sodium += Math.max(label.attributes.sodium / 1000, 0); //SO
          this.state.sugars += Math.max(label.attributes.sugars, 0); //S

        });
        this.state.data.push({
          name: 'CA',
          value: this.state.calcium / this.state.numLabels
        });
        this.state.data.push({
          name: 'C',
          value: this.state.carbohydrates / this.state.numLabels
        });
        this.state.data.push({
          name: 'CH',
          value: this.state.cholesterol / this.state.numLabels
        });
        this.state.data.push({
          name: 'F',
          value: this.state.fat / this.state.numLabels
        });
        this.state.data.push({
          name: 'FI',
          value: this.state.fiber / this.state.numLabels
        });
        this.state.data.push({
          name: 'I',
          value: this.state.iron / this.state.numLabels
        });
        this.state.data.push({
          name: 'P',
          value: this.state.protein / this.state.numLabels
        });
        this.state.data.push({
          name: 'SF',
          value: this.state.saturatedFat / this.state.numLabels
        });
        this.state.data.push({
          name: 'SO',
          value: this.state.sodium / this.state.numLabels
        });
        this.state.data.push({
          name: 'S',
          value: this.state.sugars / this.state.numLabels
        });

      }).then(() => {
        this.setState({loaded: true});
        this.plotNutrition();
      });

  }

  plotNutrition() {

    let width = 700;
    let height = 700;
    let margin = 40;

    let radius = Math.min(width, height) / 2 - margin;

    const svg = d3.select(this.refs.canvas)
      .append("svg")
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 700 700')
      .classed('svg-content', true)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let data = {};
    this.state.data.forEach((stat) => {
      if (stat.name === 'I' || stat.name === 'CH'){
        data[stat.name] = stat.value + 2;
      } else if (stat.name === 'CA' || stat.name === 'SO'){
        data[stat.name] = stat.value + 1;
      } else
      data[stat.name] = stat.value;
    });

    let color = d3.scaleOrdinal()
      .domain(data)
      .range(d3.schemeSet2);

      let pie = d3.pie()
      .value(function (d) {
          return d.value;
      });

    let data_ready = pie(d3.entries(data));

    let arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arcGenerator)
      .attr('fill', function (d) {
          return (color(d.data.key))
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function (d) {
          return d.data.key
      })
      .attr("transform", function (d) {
          return "translate(" + arcGenerator.centroid(d) + ")";
      })
      .style("text-anchor", "middle")
      .style("font-size", 17)
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
        <h3 className="text-center"><span>Nutrition Visualization</span></h3>

        <div className="row">
          <div className="col-md-3">
            <div>
              <p><strong>Average nutrition stats</strong></p>
              <p>CA: Calcium: {(this.state.calcium / this.state.numLabels).toFixed(2)}g</p>
              <p>C: Carbohydrates: {(this.state.carbohydrates / this.state.numLabels).toFixed(2)}g</p>
              <p>CH: Cholesterol: {(this.state.cholesterol / this.state.numLabels).toFixed(2)}g</p>
              <p>F: Fat: {(this.state.fat / this.state.numLabels).toFixed(2)}g</p>
              <p>FI: Fiber: {(this.state.fiber / this.state.numLabels).toFixed(2)}g</p>
              <p>I: Fiber: {(this.state.fiber / this.state.numLabels).toFixed(2)}g</p>
              <p>P: Protein: {(this.state.protein / this.state.numLabels).toFixed(2)}g</p>
              <p>SF: Saturated fat: {(this.state.saturatedFat / this.state.numLabels).toFixed(2)}g</p>
              <p>S: Sugars: {(this.state.sugars / this.state.numLabels).toFixed(2)}g</p>
              <p>SO: Sodium: {(this.state.sodium / this.state.numLabels).toFixed(2)}g</p>
            </div>
          </div>

          <div className="col-md-9">
            <div className="row">
              <div ref="canvas" className="col-md-12"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
}

export default NutritionVis
