import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import components
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>

      <Header></Header>

      <div class="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
