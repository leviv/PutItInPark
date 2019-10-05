import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/arizona.jpg'

class Arizona extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Arizona</h2>

        <div className="picture">
          <img src={picture} alt="Arizona"/>
        </div>

        <h3>Top Park</h3>
        <p><Link to="/grandcanyon/">Grand Canyon</Link></p>

        <h3># of Parks</h3>
        <p>3</p>

        <h3># of Recreational Areas</h3>
        <p>653</p>

        <h3>Population</h3>
        <p>7,172,000</p>
      </div>
    );
  }
}

export default Arizona;
