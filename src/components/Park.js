import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import ActivityCard from './ActivityCard';
import NotFound from './NotFound';

const API_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com";

class Park extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const parkName = match.params.parkName

    this.state = {
      park: [],
      recreations: [],
      parkName: parkName,
      parkLoaded: false,
      loaded: false
    };
  }

  makeApiCall(parkName) {
    fetch(API_ENDPOINT + "/nationalparks/" + parkName)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.rec_ids = data.rec_ids.split(",");
        this.state.park = data;
      }).then(() => {
        let numRecsLoaded = 0;

        // Check if we need to load any recreations
        if (this.state.park.rec_ids.length === 0) {
          this.setState({loaded: true});
        }

        // Get the recreational information
        this.state.park.rec_ids.forEach((id) => {
          fetch(API_ENDPOINT + "/recreations/id=" + id)
            // Transform the data into json
            .then((resp) => resp.json())
            .then((data) => {
              // Process data
              this.state.recreations.push(data);
            }).then(() => {
              numRecsLoaded++;
              if (numRecsLoaded === this.state.park.rec_ids.length) {
                this.setState({loaded: true});
              }
            });
        });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.parkName);
  }

  render() {
    // The API call has finished
    if (this.state.loaded){
      const displayName = this.state.park.park_name.replace(/\-+/g, ' ');

      const row = this.state.recreations.map((x,i) => {
        return i % 4 === 0 ? this.state.recreations.slice(i, i+4) : null;
      }).filter(x => x != null);

      return (
        <React.Fragment>
          <div className="instance-intro"
               style={{ backgroundImage: `url(${this.state.park.imglink})`}}>
            <h1><span>{displayName}</span></h1>
          </div>

          <div className="container instance">
            <h3>Description</h3>
            <p>{this.state.park.description}</p>
            <p>{this.state.park.weather}</p>

            <div className="row">
              <div className="col-md-4 state">
                <h3>State</h3>
                <p><Link to={getSlug('state', this.state.park.location)}>{this.state.park.location}</Link></p>
              </div>
              <div className="col-md-4 fees">
                <h3>Park Fees</h3>
                <p>${this.state.park.fee} admission</p>
              </div>
              <div className="col-md-4 visitors">
                <h3>Annual Visitors</h3>
                <p>{this.state.park.visitors}</p>
              </div>
            </div>

            <h3>Recreational Areas</h3>
            {row.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <ActivityCard
                          name={item.rec_name}
                          imageUrl={item.imglink}
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

           <h3>Addresss</h3>
           <div className="map-container">
             <Map
               google={this.props.google}
               zoom={8}
               style={{width: '100%', height: '100%', position: 'relative'}}
               initialCenter={{ lat: this.state.park.lat, lng: this.state.park.lon}}
             >
               <Marker position={{ lat: this.state.park.lat, lng: this.state.park.lon}} />
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
})(Park);
