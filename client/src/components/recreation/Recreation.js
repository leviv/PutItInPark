import React from "react";
import { Route } from "react-router-dom";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import NotFound from "../NotFound";
import StateCard from "../state/StateCard";
import ParkCard from "../park/ParkCard";
import { API_ENDPOINT, displayName } from "../../helpers/Helpers.js";
import { fakeFetch } from "../../fake_api/fakeApi.js";

class Recreation extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const recName = match.params.recName;

    this.state = {
      rec: [],
      state: [],
      park: [],
      recName: recName,
      loaded: false,
    };
  }

  makeApiCall(recName) {
    // fetch(API_ENDPOINT + "/recreations/" + recName)
    fakeFetch(API_ENDPOINT, "/recreations/", recName, null, null)
      // Transform the data into json
      .then((resp) => resp.json())
      .then((data) => {
        // Process data
        data.activities = data.activities.split(",");
        data.reservable = data.reservable === "1" ? "Yes" : "No";
        data.stay_limit = data.stay_limit === "1" ? "Yes" : "No";
        this.setState({ rec: data });
      })
      .then(() => {
        // Get the state information
        // fetch(API_ENDPOINT + "/locations/" + this.state.rec.location)
        fakeFetch(
          API_ENDPOINT,
          "/locations/",
          this.state.rec.location,
          null,
          null
        )
          // Transform the data into json
          .then((resp) => resp.json())
          .then((data) => {
            // Process data
            this.setState({ state: data });
          })
          .then(() => {
            if (this.state.rec.natpark !== "N/A") {
              // Load the park
              // fetch(API_ENDPOINT + "/nationalparks/" + this.state.rec.natpark)
              fakeFetch(
                API_ENDPOINT,
                "/nationalparks/",
                this.state.rec.natpark,
                null,
                null
              )
                // Transform the data into json
                .then((resp) => resp.json())
                .then((data) => {
                  // Process data
                  this.setState({ park: data });
                })
                .then(() => {
                  this.setState({ loaded: true });
                });
            } else {
              this.setState({ park: "N/A" });
              this.setState({ loaded: true });
            }
          });
      });
  }

  componentDidMount() {
    this.makeApiCall(this.state.recName);
  }

  render() {
    // Component loaded
    if (this.state.loaded) {
      const title = displayName(this.state.rec.rec_name);

      return (
        <React.Fragment>
          <div
            className="instance-intro"
            style={{ backgroundImage: `url(${this.state.rec.imglink})` }}
          >
            <h1>
              <span>{title}</span>
            </h1>
          </div>

          <div className="container instance">
            <h3>Description</h3>
            <p>{this.state.rec.description}</p>

            <div className="row">
              <div className="col-sm-6 reservable">
                <h3>Reservable</h3>
                <p>{this.state.rec.reservable}</p>
              </div>
              <div className="col-sm-6 stay-limit">
                <h3>Stay Limit</h3>
                <p>{this.state.rec.stay_limit}</p>
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
                  mail_code={this.state.state.mail_code}
                />
              </div>
              <div className="col-sm-6 instance-container">
                <h3>Related National Park</h3>
                {this.state.park === "N/A" ? (
                  <h4 style={{ marginTop: "20px" }}>No Related Parks</h4>
                ) : (
                  <ParkCard
                    park_name={this.state.park.park_name}
                    imglink={this.state.park.imglink}
                    location={this.state.park.location}
                    num_rec={this.state.park.num_rec}
                    fee={this.state.park.fee}
                    visitors={this.state.park.visitors}
                  />
                )}
              </div>
            </div>

            <h3>Activities</h3>
            <ul className="activities-list">
              {this.state.rec.activities.map((item, innerIndex) => {
                return (
                  <li key={innerIndex}>
                    <p>{item.toLowerCase()}</p>
                  </li>
                );
              })}
            </ul>

            <h3>Address</h3>
            <div className="map-container">
              <Map
                google={this.props.google}
                zoom={8}
                style={{ width: "100%", height: "100%", position: "relative" }}
                initialCenter={{
                  lat: this.state.rec.lat,
                  lng: this.state.rec.lon,
                }}
              >
                <Marker
                  position={{
                    lat: this.state.rec.lat,
                    lng: this.state.rec.lon,
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
})(Recreation);
