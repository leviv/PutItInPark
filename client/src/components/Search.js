import React from "react";
import Fuse from "fuse.js";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";
import Highlight from "react-highlighter";
import { API_ENDPOINT, displayName, slugName } from "./helpers/Helpers.js";
import { fakeFetch } from "./fake_api/fakeApi.js";

const LOC_ENDPOINT = API_ENDPOINT + "/locations";
const REC_ENDPOINT = API_ENDPOINT + "/recreations";
const PARK_ENDPOINT = API_ENDPOINT + "/nationalparks";

class Search extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    const searchString = match.params.searchString;

    this.state = {
      states: [],
      recs: [],
      parks: [],
      searchString: searchString,
      loaded: false,
    };
  }

  search(searchString) {
    // fetch(LOC_ENDPOINT)
    fakeFetch(API_ENDPOINT, "/locations/", null, null, null)
      // Transform the data into json
      .then((resp) => resp.json())
      // Search
      .then((data) => {
        const options = {
          keys: ["name", "park_names", "mail_code"],
          threshold: 0.2,
        };
        const fuse = new Fuse(data["objects"], options);
        this.setState({ states: fuse.search(searchString) });
      })
      .then(() => {
        // fetch(REC_ENDPOINT)
        fakeFetch(API_ENDPOINT, "/recreations/", null, null, null)
          // Transform the data into json
          .then((resp) => resp.json())
          // Search
          .then((data) => {
            const options = {
              keys: [
                "rec_name",
                "natpark",
                "location",
                "description",
                "activities",
              ],
              threshold: 0.2,
            };
            const fuse = new Fuse(data["objects"], options);
            this.setState({ recs: fuse.search(searchString) });
          })
          .then(() => {
            // fetch(PARK_ENDPOINT)
            fakeFetch(API_ENDPOINT, "/nationalparks/", null, null, null)
              // Transform the data into json
              .then((resp) => resp.json())
              // Search
              .then((data) => {
                const options = {
                  keys: ["park_name", "description", "location"],
                  threshold: 0.2,
                };
                const fuse = new Fuse(data["objects"], options);
                this.setState({ parks: fuse.search(searchString) });
              })
              .then(() => {
                this.setState({ loaded: true });
              });
          });
      });
  }

  componentDidMount() {
    this.search(this.state.searchString);
  }

  render() {
    // Page loaded
    if (this.state.loaded) {
      return (
        <React.Fragment>
          <div className="container">
            <br />
            <br />
            <h1 className="text-center">
              <span>Parks</span>
            </h1>

            {this.state.parks.length === 0 ? (
              <h4>No parks match this query</h4>
            ) : (
              <React.Fragment>
                {this.state.parks.map((park, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-md-12 instance-container" key={index}>
                        <Link to={slugName("/park/", park.park_name)}>
                          <h4>
                            <Highlight search={this.state.searchString}>
                              {displayName(park.park_name)}
                            </Highlight>
                          </h4>
                        </Link>
                        <p>
                          <strong>State: </strong>
                          <Highlight search={this.state.searchString}>
                            {displayName(park.location)}
                          </Highlight>
                        </p>
                        <p>
                          <strong>Description: </strong>
                          <Highlight search={this.state.searchString}>
                            {park.description}
                          </Highlight>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}

            <h1 className="text-center">
              <span>States</span>
            </h1>

            {this.state.states.length === 0 ? (
              <h4>No states match this query</h4>
            ) : (
              <React.Fragment>
                {this.state.states.map((state, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-md-12 instance-container" key={index}>
                        <Link to={slugName("/state/", state.name)}>
                          <h4>
                            <Highlight search={this.state.searchString}>
                              {displayName(state.name)}
                            </Highlight>
                          </h4>
                        </Link>
                        <p>
                          <strong>Mail code: </strong>
                          <Highlight search={this.state.searchString}>
                            {state.mail_code}
                          </Highlight>
                        </p>
                        <p>
                          <strong>Park names: </strong>
                          <Highlight search={this.state.searchString}>
                            {displayName(state.park_names)}
                          </Highlight>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}

            <h1 className="text-center">
              <span>Recreational Areas</span>
            </h1>

            {this.state.recs.length === 0 ? (
              <h4>
                No recreational areas match this query
                <br />
                <br />
              </h4>
            ) : (
              <React.Fragment>
                {this.state.recs.map((recreation, index) => {
                  return (
                    <div className="row" key={index}>
                      <div className="col-md-12 instance-container" key={index}>
                        <Link
                          to={slugName("/recreation/", recreation.rec_name)}
                        >
                          <h4>
                            <Highlight search={this.state.searchString}>
                              {displayName(recreation.rec_name)}
                            </Highlight>
                          </h4>
                        </Link>
                        <p>
                          <strong>State: </strong>
                          <Highlight search={this.state.searchString}>
                            {displayName(recreation.location)}
                          </Highlight>
                        </p>
                        <p>
                          <strong>Related national park: </strong>
                          <Highlight search={this.state.searchString}>
                            {displayName(recreation.natpark)}
                          </Highlight>
                        </p>
                        <p>
                          <strong>Description: </strong>
                          <Highlight search={this.state.searchString}>
                            {recreation.description}
                          </Highlight>
                        </p>
                        <p>
                          <strong>Activities: </strong>
                          <Highlight search={this.state.searchString}>
                            {displayName(recreation.activities)}
                          </Highlight>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </React.Fragment>
            )}
          </div>
        </React.Fragment>
      );
    }

    // invalid park name
    return <NotFound />;
  }
}

export default Search;
