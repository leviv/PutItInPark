import React from 'react';
import { Link, Route } from 'react-router-dom';
import NotFound from './NotFound';
import StateCard from './StateCard';

const activities = {
  "climbing" : {
    name: "climbing",
    reservable: "true",
    park: "Big Basin",
    locations: ["texas", "california"],
  },
  "rafting" : {
    name: "climbing",
    reservable: "false",
    park: "Big Bend",
    locations: ["wyoming", "louisiana"],
  },
  "camping" : {
    name: "camping",
    reservable: "true",
    park: "N/A",
    locations: ["hawaii", "alaska"],
  },
}

class Activity extends React.Component {
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
          <div className="instance-intro">
            <h1><span>{activity.name}</span></h1>
          </div>

          <div className="container instance">
            <div className="row">
              <div className="col-md-6 state">
                <h3>Related Natinoal park</h3>
                <p><Link to={getSlug('park', activity.park)}>{activity.park}</Link></p>
              </div>
              <div className="col-md-6 reservable">
                <h3>Reservable</h3>
                <p>{activity.reservable}</p>
              </div>
            </div>

            <h3>States With These Activities</h3>
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

export default Activity;
