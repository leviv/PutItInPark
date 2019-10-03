import React from 'react';
import picture from '../../assets/img/splash.jpg'

class Yosemite extends React.Component {
  render() {
    return (
      <div className="container instance">
        <h2>Yosemite</h2>

        <div className="picture">
          <img src={picture} alt="Cliff at Yosemite park"/>
        </div>

        <h3>State</h3>
        <p><a href="california">California</a></p>

        <h3>Addresss</h3>
        <p>9024 Southside Dr, Yosemite National Park</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403240.0035873217!2d-119.8312959809544!3d37.85297716348046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e0!3m2!1sen!2sus!4v1570143802000!5m2!1sen!2sus" width="100%" height="250" frameborder="0" allowfullscreen="" title="map"></iframe>

        <h3>Fees</h3>
        <p>$20 per day</p>

        <h3>Dates Open</h3>
        <p>Year Round</p>

        <h3>Description</h3>
        <p>
          Visit Yellowstone and experience the world's first national park.
          Marvel at a volcano's hidden power rising up in colorful hot springs,
          mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife
          and witness the drama of the natural world unfold. Discover the history that
          led to the conservation of our national treasures 'for the benefit and enjoyment
          of the people.'
        </p>

        <h3>Activities</h3>
        <ul>
          <li>
            <p><a href="climbing">Climbing</a></p>
          </li>
          <li>
            <p><a href="camping">Camping</a></p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Yosemite;
