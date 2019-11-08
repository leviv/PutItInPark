import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

// Import components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Parks from './components/Parks';
import Recreations from './components/Recreations';
import States from './components/States';
import NotFound from './components/NotFound';
import Park from './components/Park';
import Recreation from './components/Recreation';
import State from './components/State';
import Search from './components/Search';

function App() {
  return (
    <Router>

      <Header></Header>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/parks/:page" component={Parks} />
        <Route path="/recreations/:page" component={Recreations} />
        <Route path="/states/:page" component={States} />
        <Redirect from='/parks/' to='/parks/1' />
        <Redirect from='/recreations/' to='/recreations/1' />
        <Redirect from='/states/' to='/states/1' />
        <Route path="/park/:parkName" component={Park} />
        <Route path="/recreation/:recName" component={Recreation} />
        <Route path="/state/:stateName" component={State} />
        <Route path="/search/:searchString" component={Search} />

        <Route path="*" component={NotFound} />
      </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
