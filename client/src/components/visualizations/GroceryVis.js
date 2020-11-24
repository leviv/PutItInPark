import React from 'react'
import * as d3 from 'd3';
import NotFound from '../NotFound';

const API_ENDPOINT = 'https://api.foodcravings.net/api/nutrition_label'

class RestaurantVis extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
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
        transFat: 0.0,
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
          this.state.calcium += label.attributes.calcium;
          this.state.cholesterol += label.attributes.cholesterol;
          this.state.fiber += label.attri utes.fiber;
          this.state.iron += label.attributes.iron;
          this.state.iron += label.attributes.iron;
          this.state.protein += label.attributes.protein;
          this.state.saturatedFat += label.attributes.saturatedFat;
          this.state.sodium += label.attributes.sodium / 1000;
          this.state.sugars += label.attributes.sugars;
          this.state.transFat += label.attributes.transFat;






        });
      }).then(() => {
        this.setState({loaded: true});
        this.plotRecipes();
      });
    console.log(this.state.recipes);
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
        <h3 className="text-center"><span>Average Nutritional Profile</span></h3>
        <div className="row">
          <div ref="canvas" className="col-md-12"></div>
        </div>
      </React.Fragment>
    );
  }
}
}

export default NutritionVis
