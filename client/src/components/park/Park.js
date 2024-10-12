import React from "react";
import { Link, Route } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import RecreationCard from "../recreation/RecreationCard";
import NotFound from "../NotFound";
import {
  API_ENDPOINT,
  displayName,
  convertToRows,
  slugName,
  formatNumber,
} from "../../helpers/Helpers.js";
import { fakeFetch } from "../../fake_api/fakeApi.js";

class Park extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const parkName = match.params.parkName;

    this.state = {
      park: [],
      recreations: [],
      parkName: parkName,
      loaded: false,
    };
  }

  makeApiCall(parkName) {
    fakeFetch(API_ENDPOINT + "/nationalparks/" + parkName)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.rec_ids = data.rec_ids.split(",");
        data.location = data.location.split(",");
        this.setState({ park: data });
      })
      .then(() => {
        let numRecsLoaded = 0;

        // Check if we need to load any recreations
        if (this.state.park.rec_ids.length === 0) {
          this.setState({ loaded: true });
        }

        // Get the recreational information
        this.state.park.rec_ids.forEach((id) => {
          const query = {
            filters: [{ name: "rec_id", op: "eq", val: id }],
            single: true,
          };
          fakeFetch(API_ENDPOINT + "/recreations?q=" + JSON.stringify(query))
            // Transform the data into json
            .then((resp) => resp.json())
            .then((data) => {
              if (data) {
                // Process data
                this.state.recreations.push(data);
              }
            })
            .then(() => {
              numRecsLoaded++;
              if (numRecsLoaded === this.state.park.rec_ids.length) {
                this.setState({ loaded: true });
              }
            })
            .catch((error) => {
              console.error("Error fetching recreation id:", error);
            });
        });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.parkName);
  }

  render() {
    // The API call has finished
    if (this.state.loaded) {
      const title = displayName(this.state.park.park_name);
      const parkRows = convertToRows(this.state.recreations);

      return (
        <React.Fragment>
          <div
            className="instance-intro"
            style={{ backgroundImage: `url(${this.state.park.imglink})` }}
          >
            <h1>
              <span>{title}</span>
            </h1>
          </div>

          <div className="container instance">
            <h3>Description</h3>
            <p>{this.state.park.description}</p>
            <p>{this.state.park.weather}</p>

            <div className="row">
              <div className="col-md-4 state">
                <h3>State(s)</h3>
                {this.state.park.location.map((item, index) => {
                  return (
                    <p key={index}>
                      <Link to={slugName("/state/", item)}>{item}</Link>
                      <br />
                    </p>
                  );
                })}
              </div>
              <div className="col-md-4 fees">
                <h3>Park Fees</h3>
                <p>${this.state.park.fee} admission</p>
              </div>
              <div className="col-md-4 visitors">
                <h3>Annual Visitors</h3>
                <p>{formatNumber(this.state.park.visitors)}</p>
              </div>
            </div>

            <h3>Recreational Areas</h3>
            {parkRows.map((row, index) => {
              return (
                <div className="row" key={index}>
                  {row.map((item, innerIndex) => {
                    return (
                      <div
                        className="col-md-3 instance-container"
                        key={innerIndex}
                      >
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

            <h3>Address</h3>
            <div className="map-container">
              <Map
                google={this.props.google}
                zoom={8}
                style={{ width: "100%", height: "100%", position: "relative" }}
                initialCenter={{
                  lat: this.state.park.lat,
                  lng: this.state.park.lon,
                }}
              >
                <Marker
                  position={{
                    lat: this.state.park.lat,
                    lng: this.state.park.lon,
                  }}
                />
              </Map>
            </div>
          </div>
        </React.Fragment>
      );
    }

    // invalid park name
    return <Route component={NotFound} />;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD4KTXfspSV4uzzkjwDEzzWBfQguQ9tyqA",
})(Park);
