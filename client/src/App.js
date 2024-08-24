import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from "react-router-dom";

// Import components
import Home from "./components/Home";
import About from "./components/about/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

// Models
import Parks from "./components/park/Parks";
import Recreations from "./components/recreation/Recreations";
import States from "./components/state/States";

// Instances
import Park from "./components/park/Park";
import Recreation from "./components/recreation/Recreation";
import State from "./components/state/State";

import RestaurantVis from "./components/visualizations/RestaurantVis";
import RecipeVis from "./components/visualizations/RecipeVis";
import NutritionVis from "./components/visualizations/NutritionVis";
import Visualizations from "./components/visualizations/Visualizations";

function App() {
  return (
    <HashRouter>
      <Header></Header>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/parks/:page" component={Parks} />
        <Route path="/recreations/:page" component={Recreations} />
        <Route path="/states/:page" component={States} />
        <Redirect from="/parks/" to="/parks/1" />
        <Redirect from="/recreations/" to="/recreations/1" />
        <Redirect from="/states/" to="/states/1" />
        <Route path="/park/:parkName" component={Park} />
        <Route path="/recreation/:recName" component={Recreation} />
        <Route path="/state/:stateName" component={State} />
        <Route path="/search/:searchString" component={Search} />
        <Route path="/vis/" component={Visualizations} />
        <Route path="/vis1/" component={RestaurantVis} />
        <Route path="/vis2/" component={RecipeVis} />
        <Route path="/vis3/" component={NutritionVis} />

        <Route path="*" component={NotFound} />
      </Switch>

      <Footer></Footer>
    </HashRouter>
  );
}

export default App;
