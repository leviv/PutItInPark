import React from 'react'
import NotFound from '../NotFound';
import RestaurantVis from './RestaurantVis';
import RecipeVis from './RecipeVis';
import NutritionVis from './NutritionVis';

class Visualizations extends React.Component {
    render() {
        return (
            <div>
                <RecipeVis/>
                <RestaurantVis/>
                <NutritionVis/>
            </div>
        )
    }

}

export default Visualizations