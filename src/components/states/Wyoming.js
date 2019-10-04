import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/wyoming.jpg'

class Wyoming extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Wyoming</h2>

        <div className="picture">
          <img src={picture}/>
        </div>

        <h3>Top Park</h3>
        <p><Link to="/yellowstone/">Yellowstone</Link></p>

        <h3># of Parks</h3>
        <p>2</p>

        <h3># of Recreational Areas</h3>
        <p>272</p>

        <h3>Population</h3>
        <p>577,737</p>
      </div>
    );
  }
}

export default Wyoming;
