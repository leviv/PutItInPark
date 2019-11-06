import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import NotFound from './NotFound';
import StateCard from './StateCard';

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
}

class Recreation extends React.Component {
  render() {
    const { match } = this.props;
    const activity = activities[match.params.activityName]

    // Valid park
    if (activity !== undefined){
      const row = activity.locations.map((x,i) => {
        return i % 4 === 0 ? activity.locations.slice(i, i+4) : null;
      }).filter(x => x != null);

      return (
        <React.Fragment>
          <div className="instance-intro"
               style={{ backgroundImage: `url(${activity.imageUrl})`}}>
            <h1><span>{activity.name}</span></h1>
          </div>

          <div className="container instance">
            <h3>Description</h3>
            <p>{activity.description}</p>

            <div className="row">
              <div className="col-md-4 state">
                <h3>Related National park</h3>
                <p><Link to={getSlug('park', activity.park)}>{activity.park}</Link></p>
              </div>
              <div className="col-md-4 reservable">
                <h3>Reservable</h3>
                <p>{activity.reservable}</p>
              </div>
              <div className="col-md-4 stay-limit">
                <h3>Stay Limit</h3>
                <p>{activity.stayLimit}</p>
              </div>
            </div>

            <h3>Related States</h3>
            {row.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <StateCard
                          name={item}
                          imageUrl=""
                          recreationAreas=""
                          population=""
                        />
                      </div>
                    );
                  })}
                </div>
              );
           })}

           <h3>Activities</h3>
           <ul className="activities-list">
             {activity.activities.map((item, innerIndex) => {
                return (
                  <li><p>{item}</p></li>
                );
             })}
           </ul>

           <h3>Addresss</h3>
           <div className="map-container">
             <Map
               google={this.props.google}
               zoom={8}
               style={{width: '100%', height: '100%', position: 'relative'}}
               initialCenter={{ lat: activity.latitude, lng: activity.longitude}}
             >
               <Marker position={{ lat: activity.latitude, lng: activity.longitude}} />
             </Map>
           </div>
          </div>
        </React.Fragment>
      );
    }

    // invalid park name
    return (
      <Route component={NotFound} />
    );
  }
}

function getSlug(pre, str) {
  return "/" + pre + "/" + str.replace(/\s+/g, '-').toLowerCase();
}

export default GoogleApiWrapper({
 apiKey: ('AIzaSyD4KTXfspSV4uzzkjwDEzzWBfQguQ9tyqA')
})(Recreation);
