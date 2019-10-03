import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/rafting.jpg'

class Rafting extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Rafting</h2>

        <div className="picture">
          <img src={picture} alt="A man rafting"/>
        </div>

        <h3>Locations Offered</h3>
        <ul>
          <li>
            <p><Link to="/grandcanyon/">Grand Canyon</Link></p>
          </li>
          <li>
            <p><Link to="/yellowstone/">Yellowstone</Link></p>
          </li>
        </ul>

        <h3>Fees</h3>
        <p>$150 per day</p>

        <h3>Dates Open</h3>
        <p>Summer and Fall only</p>
      </div>
    );
  }
}

export default Rafting;
