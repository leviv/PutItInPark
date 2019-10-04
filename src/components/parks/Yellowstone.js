import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/yellowstone.jpg'


class Yellowstone extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Yellowstone</h2>

        <div className="picture">
          <img src={picture} alt="Cliff at Yellowstone park"/>
        </div>

        <h3>State</h3>
        <p><Link to="/wyoming/">Wyoming</Link></p>

        <h3>Addresss</h3>
        <p>2 Officers Row, Yellowstone National Park</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727453.6961532518!2d-111.07448152095374!3d44.58442485883087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351e55555555555%3A0xaca8f930348fe1bb!2sYellowstone%20National%20Park!5e0!3m2!1sen!2sus!4v1570144050379!5m2!1sen!2sus" width="100%" height="250" frameborder="0" allowfullscreen="" title="map"></iframe>

        <h3>Fees</h3>
        <p>$20 per day</p>

        <h3>Dates Open</h3>
        <p>Year Round</p>

        <h3>Description</h3>
        <p>
        On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.
        </p>

        <h3>Activities</h3>
        <ul>
          <li>
            <p><Link to="/rafting/">Rafting</Link></p>
          </li>
          <li>
            <p><Link to="/climbing/">Climbing</Link></p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Yellowstone;
