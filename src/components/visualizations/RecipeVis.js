import React from 'react'
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'
import * as d3 from 'd3';
import {formatNumber, displayName, slugName} from '../helpers/Helpers.js'
import NotFound from '../NotFound';

const API_ENDPOINT = "https://api.foodcravings.net/api/recipes";

class RecipeVis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: [],
      loaded: false,
    };
  }

  makeApiCall() {
    fetch(API_ENDPOINT)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.data.forEach((recipe) => {
          this.state.recipes.push({name: recipe.attributes.name, calories: recipe.attributes.calories, color: ('#' + Math.floor(Math.random() * 16777215).toString(16))})
        });
      }).then(() => {
        this.setState({loaded: true});
        this.plotRecipes();
      });
    console.log(this.state.recipes); 
  }

  plotRecipes() {
    // Set up the svg container
    const chart = d3.select(this.refs.canvas)
      .append('svg')
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 960 550')
      .attr('stroke', '#fff')
      .attr('fill', '#264653')
      .classed('svg-content', true)

    const pack = data => d3.pack()
      .size([960 - 2, 600 - 2])
      .padding(3)(d3.hierarchy({children: data})
      .sum(d => d.calories))

    const root = pack(this.state.recipes);
    const format = d3.format(",d");

    const leaf = chart.selectAll("g")
      .data(root.leaves())
      .join("g")
      .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

    // Append the tooltip
    let div = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    leaf.append("circle")
      .attr("r", d => d.r)
      .attr("fill-opacity", 0.7)
      .attr('stroke-width', '0px')
      .style("fill", d => d.color)
      .style('cursor', 'pointer')
      .on('mouseover', function(d, i) {
        // Slightly expand the circle
        d3.select(this)
          .transition()
          .duration(200)
          .attr('stroke', '#FED892')
          .attr('stroke-width', '3px')

        // Fade in the tooltip
        div.transition()
          .duration(200)
          .style("opacity", '1');

        // Set the position of the tooltip
        div.html(displayName(d.data.name) + '<br/>' + formatNumber(d.data.calories))
        .style("left", (d3.event.pageX + 5) + "px")
        .style("top", (d3.event.pageY - 5) + "px");;
      })
      .on('mouseout', function(d, i) {
        // Shrink the circle back
        d3.select(this)
          .transition()
          .duration(200)
          .attr('stroke-width', '0px');

        // Fade out the tooltip
        div.transition()
          .duration(200)
          .style("opacity", 0);
      })

    leaf.append("text")
      .text(function(d){return displayName(d.data.name)})
      .style('fill', '#204653')
      .style('pointer-events', 'none')
      .style('font-size', function(d){
          return d.r/3;
      })
      .attr("text-anchor", "middle")
      .attr('stroke', 'none')
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
          <h3 className="text-center"><span>Calories by Recipe</span></h3>
          <div className="row">
            <div ref="canvas" className="col-md-12"></div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default RecipeVis