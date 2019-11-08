import React from 'react';
import Fuse from 'fuse.js';
import { Route } from 'react-router-dom';
import ParkCard from './ParkCard';
import StateCard from './StateCard';
import RecreationCard from './RecreationCard';
import NotFound from './NotFound';

const LOC_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations";
const REC_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/recreations";
const PARK_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks";

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const searchString = match.params.searchString

    this.state = {
      states: [],
      recs: [],
      parks: [],
      searchString: searchString,
      loaded: false
    };
  }

  search(searchString) {
    fetch(LOC_ENDPOINT)
      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ['name'],
          threshold: 0.3
        };
        const fuse = new Fuse(data['objects'], options);
        this.setState({states: fuse.search(searchString)});
      }).then(() => {
        fetch(REC_ENDPOINT) //+ "?q="+ JSON.stringify(this.state.query))
          // Transform the data into json
          .then((resp) => resp.json())
          // Search
          .then((data) => {
            const options = {
              keys: ['rec_name'],
              threshold: 0.3
            };
            const fuse = new Fuse(data['objects'], options);
            this.setState({recs: fuse.search(searchString)});
          }).then(() => {
            fetch(PARK_ENDPOINT) //+ "?q="+ JSON.stringify(this.state.query))
              // Transform the data into json
              .then((resp) => resp.json())
              // Search
              .then((data) => {
                const options = {
                  keys: ['park_name'],
                  threshold: 0.3
                };
                const fuse = new Fuse(data['objects'], options);
                this.setState({parks: fuse.search(searchString)});
              }).then(() => {
                this.setState({loaded: true});
              });
          });
      });
  }

  componentDidMount() {
    this.search(this.state.searchString);
  }

  render() {
    // Page loaded
    if (this.state.loaded){
      const parkRow = this.state.parks.map((x,i) => {
        return i % 4 === 0 ? this.state.parks.slice(i, i+4) : null;
      }).filter(x => x != null);

      const stateRow = this.state.states.map((x,i) => {
        return i % 4 === 0 ? this.state.states.slice(i, i+4) : null;
      }).filter(x => x != null);

      const recRow = this.state.recs.map((x,i) => {
        return i % 4 === 0 ? this.state.recs.slice(i, i+4) : null;
      }).filter(x => x != null);

      return (
        <React.Fragment>
          <div className="container">
            <h2>Parks</h2>
            {parkRow.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <ParkCard
                          park_name={item.park_name}
                          imglink={item.imglink}
                          location={item.location}
                          num_rec={item.num_rec}
                          visitors={item.visitors}
                          fee={item.fee}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <h2>States</h2>
            {stateRow.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <StateCard
                          name={item.name}
                          imglink={item.imglink}
                          num_parks={item.num_parks}
                          numrec={item.numrec}
                          pop={item.pop}
                          mail_code={item.mail_code}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}

            <h2>Recreational Areas</h2>
            {recRow.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <RecreationCard
                          rec_name={item.rec_name}
                          imglink={item.imglink}
                          num_activities={item.num_activities}
                          reservable={item.reservable}
                          stay_limit={item.stay_limit}
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
      <NotFound />
    );
  }
}

export default Search;
