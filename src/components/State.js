import React from 'react';
import { Link, Route } from 'react-router-dom';
import NotFound from './NotFound';

const states = {
  "arizona" : {
    name: "arizona",
    imageUrl: "../assets/img/arizona.jpg",
    recreationAreas: 653,
    population: 7172000,
    parks: ["grand-canyon"],
  },
  "california" : {
    name: "california",
    imageUrl: "../assets/img/california.jpg",
    recreationAreas: 1094,
    population: 39560000,
    parks: ["yosemity"],
  },
  "wyoming" : {
    name: "wyoming",
    imageUrl: "../assets/img/wyoming.jpg",
    recreationAreas: 272,
    population: 577737,
    parks: ["yellowstone"],
  },
}

class State extends React.Component {
  render() {
    const { match } = this.props;
    const state = states[match.params.stateName]

    // Valid park
    if (state !== undefined){
      return (
        <div className="container instance">
          <h2>{state.name}</h2>

          <div className="picture">
            <img src={state.imageUrl} alt="Cliff at Yosemite park"/>
          </div>

          <h3>Recreation Areas</h3>
          <p>{state.recreationAreas}</p>

          <h3>Parks</h3>
          <ul>
            {state.parks.map(function(park){
              return (
                <li><p>{park}</p></li>
              );
            })}
          </ul>
        </div>
      );
    }

    // invalid park name
    return (
      <Route component={NotFound} />
    );
  }
}

export default State;
