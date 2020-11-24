import React from 'react'
import RestaurantVis from './RestaurantVis';
import RecipeVis from './RecipeVis';
import NutritionVis from './NutritionVis';

class Visualizations extends React.Component {
    render() {
        return (
            <div className="container">
                <RecipeVis/>
                <RestaurantVis/>
                <NutritionVis/>
            </div>
        )
    }

}

export default Visualizations
