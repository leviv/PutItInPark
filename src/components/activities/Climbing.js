import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/climbing.jpg'

class Climbing extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Climbing</h2>

        <div className="picture">
          <img src={picture} alt="A man climbing"/>
        </div>

        <h3>Locations Offered</h3>
        <ul>
          <li>
            <p><Link to="/yosemite/">Yosemite</Link></p>
          </li>
          <li>
            <p><Link to="/yellowstone/">Yellowstone</Link></p>
          </li>
        </ul>

        <h3>Fees</h3>
        <p>$100 per day</p>

        <h3>Dates Open</h3>
        <p>Year Round</p>
      </div>
    );
  }
}

export default Climbing;
