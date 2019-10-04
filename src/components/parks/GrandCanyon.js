import React from 'react';
import { Link } from 'react-router-dom';
import picture from '../../assets/img/grandcanyon.jpg'

class GrandCanyon extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>The Grand Canyon</h2>

        <div className="picture">
          <img src={picture} alt="Grand Canyon landscape"/>
        </div>

        <h3>State</h3>
        <p><Link to="/arizona/">Arizona</Link></p>

        <h3>Addresss</h3>
        <p>20 S Entrance Rd, Grand Canyon Village</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825357.373159927!2d-113.40359755940578!3d36.09221459145433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x873312ae759b4d15%3A0x1f38a9bec9912029!2sGrand%20Canyon%20National%20Park!5e0!3m2!1sen!2sus!4v1570144295048!5m2!1sen!2sus" width="100%" height="250" frameborder="0" allowfullscreen="" title="map"></iframe>

        <h3>Fees</h3>
        <p>$20 per day</p>

        <h3>Dates Open</h3>
        <p>Year Round</p>

        <h3>Description</h3>
        <p>
        Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.
        </p>

        <h3>Activities</h3>
        <ul>
          <li>
            <p><Link to="/rafting/">Rafting</Link></p>
          </li>
          <li>
            <p><Link to="/camping/">Camping</Link></p>
          </li>
        </ul>
      </div>
    );
  }
}

export default GrandCanyon;
