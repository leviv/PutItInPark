import React from 'react';
import { Link, Route } from 'react-router-dom';
import NotFound from './NotFound';

const parks = {
  "yosemite" : {
    name: "yosemite",
    imageUrl: "../assets/img/splash.jpg",
    state: "california",
    address: "9024 Southside Dr, Yosemite National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
    activities: ["climbing", "camping"],
  },
  "grand-canyon" : {
    name: "the grand canyon",
    imageUrl: "../assets/img/grandcanyon.jpg",
    state: "new-mexico",
    address: "20 S Entrance Rd, Grand Canyon Village",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.",
    activities: ["rafting", "camping"],
  },
  "yellowstone" : {
    name: "yellowstone",
    imageUrl: "../assets/img/yellowstone.jpg",
    state: "wyoming",
    address: "2 Officers Row, Yellowstone National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.",
    activities: ["climbing", "rafting"],
  }
}

class Park extends React.Component {
  render() {
    const { match } = this.props;
    const park = parks[match.params.parkName]

    // Valid park
    if (park !== undefined){
      return (
        <div className="container instance">
          <h2>{park.name}</h2>

          <div className="picture">
            <img src={park.imageUrl} alt="Cliff at Yosemite park"/>
          </div>

          <h3>State</h3>
          <p><Link to="/{park.state}">{park.state}</Link></p>

          <h3>Addresss</h3>
          <p>{park.address}</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403240.0035873217!2d-119.8312959809544!3d37.85297716348046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e0!3m2!1sen!2sus!4v1570143802000!5m2!1sen!2sus" width="100%" height="250" frameborder="0" allowfullscreen="" title="map"></iframe>

          <h3>Fees</h3>
          <p>{park.fees}</p>

          <h3>Dates Open</h3>
          <p>{park.datesOpen}</p>

          <h3>Description</h3>
          <p>{park.description}</p>

          <h3>Activities</h3>
          <ul>
            {park.activities.map(function(activity){
              return (
                <li><p>{activity}</p></li>
              );
            })}
          </ul>
        </div>
      );
    }

    // invalid park name
    return (
      <Route component={NotFound} />
    );
  }
}

export default Park;
