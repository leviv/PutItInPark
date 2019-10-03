import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/camping.jpg'

class Camping extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Camping</h2>

        <div className="picture">
          <img src={picture} alt="A tent"/>
        </div>

        <h3>Locations Offered</h3>
        <ul>
          <li>
            <p><Link to="/grandcanyon/">Grand Canyon</Link></p>
          </li>
          <li>
            <p><Link to="/yosemite/">Yosemite</Link></p>
          </li>
        </ul>

        <h3>Fees</h3>
        <p>$40 per day</p>

        <h3>Dates Open</h3>
        <p>Closed during December</p>
      </div>
    );
  }
}

export default Camping;
