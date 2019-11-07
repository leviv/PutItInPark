import React from 'react';
import { Route } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import NotFound from './NotFound';
import StateCard from './StateCard';
import ParkCard from './ParkCard';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api";

class Recreation extends React.Component {

  constructor(props) {
    super(props);
    const { match } = this.props;
    const recName = match.params.recName

    this.state = {
      rec: [],
      state: [],
      park: [],
      recName: recName,
      loaded: false
    };
  }

  makeApiCall(recName) {
    fetch(API_ENDPOINT + "/recreations/" + recName)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.activities = data.activities.split(",");
        this.setState({rec: data});
      }).then(() => {

        // Get the state information
        fetch(API_ENDPOINT + "/locations/" + this.state.rec.location)
          // Transform the data into json
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
            // Process data
            this.setState({state: data});
          }).then(() => {
            // Load the park
            fetch(API_ENDPOINT + "/nationalparks/" + this.state.rec.natpark)
              // Transform the data into json
              .then((resp) => resp.json())
              .then((data) => {
                console.log(data);
                // Process data
                this.setState({park: data});
              }).then(() => {
                this.setState({loaded: true});
              });
          });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.recName);
  }

  render() {
    // Component loaded
    if (this.state.loaded){
      return (
        <React.Fragment>
          <div className="instance-intro"
               style={{ backgroundImage: `url(${this.state.rec.imglink})`}}>
            <h1><span>{this.state.rec.rec_name}</span></h1>
          </div>

          <div className="container instance">
            <h3>Description</h3>
            <p>{this.state.rec.description}</p>

            <div className="row">
              <div className="col-sm-6 reservable">
                <h3>Reservable</h3>
                <p>{"" + this.state.rec.reservable}</p>
              </div>
              <div className="col-sm-6 stay-limit">
                <h3>Stay Limit</h3>
                <p>{"" + this.state.rec.stay_limit}</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6 instance-container">
                <h3>State</h3>
                <StateCard
                  name={this.state.state.name}
                  imglink={this.state.state.imglink}
                  num_parks={this.state.state.num_parks}
                  numrec={this.state.state.numrec}
                  pop={this.state.state.pop}
                />
              </div>
              <div className="col-sm-6 instance-container">
                <h3>Related National Park</h3>
                <ParkCard
                  park_name={this.state.park.park_name}
                  imglink={this.state.park.imglink}
                  location={this.state.park.location}
                  num_rec={this.state.park.num_rec}
                  fee={this.state.park.fee}
                />
              </div>
            </div>

           <h3>Activities</h3>
           <ul className="activities-list">
             {this.state.rec.activities.map((item, innerIndex) => {
                return (
                  <li><p>{item.toLowerCase()}</p></li>
                );
             })}
           </ul>

           <h3>Address</h3>
           <div className="map-container">
             <Map
               google={this.props.google}
               zoom={8}
               style={{width: '100%', height: '100%', position: 'relative'}}
               initialCenter={{ lat: this.state.rec.lat, lng: this.state.rec.lon}}
             >
               <Marker position={{ lat: this.state.rec.lat, lng: this.state.rec.lon}} />
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

export default GoogleApiWrapper({
 apiKey: ('AIzaSyD4KTXfspSV4uzzkjwDEzzWBfQguQ9tyqA')
})(Recreation);
