import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';

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
  "climbing1" : {
    name: "climbing",
    imageUrl: "../assets/img/climbing.jpg",
    fees: "$100 per day",
    datesOpen: "year round",
    locations: ["yellowstone", "yosemite"],
  },
  "rafting1" : {
    name: "climbing",
    imageUrl: "../assets/img/climbing.jpg",
    fees: "$150 per day",
    datesOpen: "year round",
    locations: ["yellowstone", "yosemite"],
  },
  "camping1" : {
    name: "camping",
    imageUrl: "../assets/img/camping.jpg",
    fees: "$250 per day",
    datesOpen: "year round",
    locations: ["yosemite", "grand-canyon"],
  },
  "climbing2" : {
    name: "climbing",
    imageUrl: "../assets/img/climbing.jpg",
    fees: "$100 per day",
    datesOpen: "year round",
    locations: ["yellowstone", "yosemite"],
  },
  "rafting2" : {
    name: "climbing",
    imageUrl: "../assets/img/climbing.jpg",
    fees: "$150 per day",
    datesOpen: "year round",
    locations: ["yellowstone", "yosemite"],
  },
  "camping2" : {
    name: "camping",
    imageUrl: "../assets/img/camping.jpg",
    fees: "$250 per day",
    datesOpen: "year round",
    locations: ["yosemite", "grand-canyon"],
  },
}

class Activities extends React.Component {
  render() {
    const row = Object.keys(activities).map((x,i) => {
      return i % 4 === 0 ? Object.keys(activities).slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>Activities</h2>
        </div>

        <div className="container">

          {row.map((result, index) => {
            return (
              <div className="row" key={index}>
                {result.map((item, innerIndex) => {
                  return (
                    <div className="col-md-3 instance-container" key={innerIndex}>
                      <ActivityCard
                        name={activities[item].name}
                        imageUrl={activities[item].imageUrl}
                        fees={activities[item].fees}
                        datesOpen={activities[item].datesOpen}
                        locations={activities[item].locations}
                      />
                    </div>
                  );
                })}
              </div>
            );
         })}
        </div>
      </React.Fragment>
    );
  }
}

export default Activities;
