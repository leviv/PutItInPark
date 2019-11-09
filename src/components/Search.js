import React from 'react';
import Fuse from 'fuse.js';
import { Route, Link } from 'react-router-dom';
import ParkCard from './ParkCard';
import StateCard from './StateCard';
import RecreationCard from './RecreationCard';
import NotFound from './NotFound';
import Highlight from 'react-highlighter';

const LOC_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/locations";
const REC_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/recreations";
const PARK_ENDPOINT = "https://flask-backend-dot-potent-retina-254722.appspot.com/api/nationalparks";

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
          keys: ['name', 'park_names', 'mail_code'],
          threshold: 0.2
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
              keys: ['rec_name', 'natpark', 'description'],
              threshold: 0.2
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
                  keys: ['park_name', 'description', 'location'],
                  threshold: 0.2
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
          <br/><br/>
            <h1 className="text-center"><span>Parks</span></h1>
            {this.state.parks.map((result, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-12 instance-container" key={index}>
                  <Link to={'/park/' + result.park_name.replace(/\s+/g, '-').toLowerCase()}>
                    <h4><Highlight search={this.state.searchString}>{result.park_name.replace(/-+/g, ' ')}</Highlight></h4>
                  </Link>
                  <p><strong>State: </strong><Highlight search={this.state.searchString}>{result.location}</Highlight></p>
                  <p><strong>Description: </strong><Highlight search={this.state.searchString}>{result.description}</Highlight></p>
                  </div>
                </div>
              );
            })}

            <h1 className="text-center"><span>States</span></h1>
            {this.state.states.map((result, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-12 instance-container" key={index}>
                  <Link to={'/state/' + result.name.replace(/\s+/g, '-').toLowerCase()}>
                    <h4><Highlight search={this.state.searchString}>{result.name.replace(/-+/g, ' ')}</Highlight></h4>
                  </Link>
                  <p><strong>Mail code: </strong><Highlight search={this.state.searchString}>{result.mail_code}</Highlight></p>
                  <p><strong>Park names: </strong><Highlight search={this.state.searchString}>{result.park_names}</Highlight></p>
                  </div>
                </div>
              );
            })}

            <h1 className="text-center"><span>Recreational Areas</span></h1>
            {this.state.recs.map((result, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-md-12 instance-container" key={index}>
                  <Link to={'/recreation/' + result.rec_name.replace(/\s+/g, '-').toLowerCase()}>
                    <h4><Highlight search={this.state.searchString}>{result.rec_name.replace(/-+/g, ' ')}</Highlight></h4>
                  </Link>
                  <p><strong>Related national park: </strong><Highlight search={this.state.searchString}>{result.natpark}</Highlight></p>
                  <p><strong>Description: </strong><Highlight search={this.state.searchString}>{result.description}</Highlight></p>
                  </div>
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
