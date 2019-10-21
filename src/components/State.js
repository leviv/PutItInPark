import React from 'react';
import { Link, Route } from 'react-router-dom';
import NotFound from './NotFound';

const states = {
  "arizona" : {
    name: "arizona",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/800px-Flag_of_Arizona.svg.png",
    recreationAreas: 653,
    population: 7172000,
    parks: ["grand-canyon"],
  },
  "california" : {
    name: "california",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/900px-Flag_of_California.svg.png",
    recreationAreas: 1094,
    population: 39560000,
    parks: ["yosemity"],
  },
  "wyoming" : {
    name: "wyoming",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1000px-Flag_of_Wyoming.svg.png",
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
