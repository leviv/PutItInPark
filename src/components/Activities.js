import React from 'react';
import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';

const activities = {
  "recreation-area" : {
    name: "recreation-area",
    reservable: "true",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.4737",
    longitude: "37.8083",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "Big Basin",
    locations: ["texas", "california"],
  },
  "recreation-area2" : {
    name: "recreation-area2",
    reservable: "false",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.473747",
    longitude: "37.80837439",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "Big Bend",
    locations: ["wyoming", "louisiana"],
  },
  "black-ridge-canyons-wilderness" : {
    name: "black-ridge-canyons-wilderness",
    reservable: "true",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.473747",
    longitude: "37.80837439",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "N/A",
    locations: ["hawaii", "alaska"],
  },
  "recreation-area1" : {
    name: "recreation-area",
    reservable: "true",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.4737",
    longitude: "37.8083",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "Big Basin",
    locations: ["texas", "california"],
  },
  "recreation-area21" : {
    name: "recreation-area2",
    reservable: "false",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.473747",
    longitude: "37.80837439",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "Big Bend",
    locations: ["wyoming", "louisiana"],
  },
  "black-ridge-canyons-wilderness1" : {
    name: "black-ridge-canyons-wilderness",
    reservable: "true",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.473747",
    longitude: "37.80837439",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "N/A",
    locations: ["hawaii", "alaska"],
  },
  "recreation-area3" : {
    name: "recreation-area",
    reservable: "true",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.4737",
    longitude: "37.8083",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "Big Basin",
    locations: ["texas", "california"],
  },
  "recreation-area22" : {
    name: "recreation-area2",
    reservable: "false",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.473747",
    longitude: "37.80837439",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "Big Bend",
    locations: ["wyoming", "louisiana"],
  },
  "black-ridge-canyons-wilderness2" : {
    name: "black-ridge-canyons-wilderness",
    reservable: "true",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Knowles_Canyon%2C_MCNCA.jpg",
    latitude: "-122.473747",
    longitude: "37.80837439",
    activities: ["BIKING","WILDERNESS"],
    description: "Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincolon, surrounded by the beauty…. etc.",
    stayLimit: "true",
    park: "N/A",
    locations: ["hawaii", "alaska"],
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
                        activities={activities[item].activities.length}
                        reservable={activities[item].reservable}
                        stayLimit={activities[item].stayLimit}
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
