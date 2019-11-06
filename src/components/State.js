import React from 'react';
import { Route } from 'react-router-dom';
import ParkCard from './ParkCard';
import NotFound from './NotFound';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com";

class State extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const stateName = match.params.stateName

    this.state = {
      state: [],
      parks: [],
      stateName: stateName,
      loaded: false
    };
  }

  makeApiCall(stateName) {
    fetch(API_ENDPOINT + "/locations/" + stateName)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.park_names = data.park_names.split(",");
        this.setState({state: data});
      }).then(() => {
        let numParksLoaded = 0;

        // Check if we need to load any recreations
        if (this.state.state.park_names.length === 0) {
          this.setState({loaded: true});
        }

        // Get the park information
        this.state.state.park_names.forEach((id) => {
          fetch(API_ENDPOINT + "/nationalparks/" + id)
            // Transform the data into json
            .then((resp) => resp.json())
            .then((data) => {
              // Process data
              this.state.parks.push(data);
            }).then(() => {
              numParksLoaded++;
              if (numParksLoaded === this.state.state.park_names.length) {
                this.setState({loaded: true});
              }
            });
        });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.stateName);
  }

  render() {
    // Valid park
    if (this.state.loaded){
      const row = this.state.parks.map((x,i) => {
        return i % 4 === 0 ? this.state.parks.slice(i, i+4) : null;
      }).filter(x => x != null);

      return (
        <React.Fragment>
          <div className="instance-intro"
               style={{ backgroundImage: `url(${this.state.state.imglink})`}}>
            <h1><span>{this.state.state.name}</span></h1>
          </div>

          <div className="container instance">
            <div className="row">
              <div className="col-md-4 state">
                <h3>Number of National Parks</h3>
                <p>{this.state.state.num_parks}</p>
              </div>
              <div className="col-md-4 fees">
                <h3>Population</h3>
                <p>{this.state.state.pop}</p>
              </div>
              <div className="col-md-4 dates-open">
                <h3>Number of Recreational Areas</h3>
                <p>{this.state.state.numrec}</p>
              </div>
            </div>

            <h3>National Parks</h3>
            {row.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <ParkCard
                          park_name={item.park_name}
                          imglink={item.imglink}
                          location={item.location}
                          num_rec = {item.num_rec}
                          fee={item.fee}
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

export default State;
