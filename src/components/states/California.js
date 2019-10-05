import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/california.jpg'

class California extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>California</h2>

        <div className="picture">
          <img src={picture} alt="California"/>
        </div>

        <h3>Top Park</h3>
        <p><Link to="/yosemite/">Yosemite</Link></p>

        <h3># of Parks</h3>
        <p>9</p>

        <h3># of Recreational Areas</h3>
        <p>1,094</p>

        <h3>Population</h3>
        <p>39,560,000</p>
      </div>
    );
  }
}

export default California;
