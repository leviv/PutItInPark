import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import components
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <Router>

      <Header></Header>

      <div class="container">
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
      </div>
    </Router>
  );
}

export default App;
