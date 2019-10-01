import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Parks from './components/Parks';
import Recreation from './components/Recreation';
import States from './components/States';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>

      <Header></Header>

      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/parks/" component={Parks} />
          <Route path="/recreation/" component={Recreation} />
          <Route path="/states/" component={States} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
