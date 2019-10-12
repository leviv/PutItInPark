import React from 'react';
import { Link, Route } from 'react-router-dom';
import NotFound from './NotFound';

const activities = {
  "climbing" : {
    name: "climbing",
    imageUrl: "../assets/img/climbing.jpg",
    fees: "$100 per day",
    datesOpen: "year round",
    locations: ["yellowstone", "yosemite"],
  },
  "rafting" : {
    name: "climbing",
    imageUrl: "../assets/img/climbing.jpg",
    fees: "$150 per day",
    datesOpen: "year round",
    locations: ["yellowstone", "yosemite"],
  },
  "camping" : {
    name: "camping",
    imageUrl: "../assets/img/camping.jpg",
    fees: "$250 per day",
    datesOpen: "year round",
    locations: ["yosemite", "grand-canyon"],
  },
}

class Activity extends React.Component {
  render() {
    const { match } = this.props;
    const activity = activities[match.params.activityName]

    // Valid park
    if (activity !== undefined){
      return (
        <div className="container instance">
          <h2>{activity.name}</h2>

          <div className="picture">
            <img src={activity.imageUrl} alt="Cliff at Yosemite park"/>
          </div>

          <h3>Fees</h3>
          <p>{activity.fees}</p>

          <h3>Dates Open</h3>
          <p>{activity.datesOpen}</p>

          <h3>Parks with these activities</h3>
          <ul>
            {activity.locations.map(function(location){
              return (
                <li><p>{location}</p></li>
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

export default Activity;
