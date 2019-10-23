import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Parks from './components/Parks';
import Activities from './components/Activities';
import States from './components/States';
import NotFound from './components/NotFound';
import Park from './components/Park';
import Activity from './components/Activity';
import State from './components/State';

function App() {
  return (
    <Router>

      <Header></Header>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/parks/" component={Parks} />
        <Route path="/recreation/" component={Activities} />
        <Route path="/states/" component={States} />
        <Route path="/park/:parkName" component={Park} />
        <Route path="/activity/:activityName" component={Activity} />
        <Route path="/state/:stateName" component={State} />

        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
