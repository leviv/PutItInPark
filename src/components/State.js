import React from 'react';
import { Route } from 'react-router-dom';
import ParkCard from './ParkCard';
import NotFound from './NotFound';

const states = {
  "arizona" : {
    name: "arizona",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/800px-Flag_of_Arizona.svg.png",
    recreationAreas: 653,
    population: 7172000,
    parks: ["grand-canyon", "park2"],
  },
  "california" : {
    name: "california",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/900px-Flag_of_California.svg.png",
    recreationAreas: 1094,
    population: 39560000,
    parks: ["yosemite", "park2"],
  },
  "wyoming" : {
    name: "wyoming",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1000px-Flag_of_Wyoming.svg.png",
    recreationAreas: 272,
    population: 577737,
    parks: ["yellowstone", "park2"],
  },
}

class State extends React.Component {
  render() {
    const { match } = this.props;
    const state = states[match.params.stateName]

    // Valid park
    if (state !== undefined){
      const row = state.parks.map((x,i) => {
        return i % 4 === 0 ? state.parks.slice(i, i+4) : null;
      }).filter(x => x != null);

      return (
        <React.Fragment>
          <div className="instance-intro"
               style={{ backgroundImage: `url(${state.imageUrl})`}}>
            <h1><span>{state.name}</span></h1>
          </div>

          <div className="container instance">
            <div className="row">
              <div className="col-md-4 state">
                <h3>Number of National Parks</h3>
                <p>{state.parks.length}</p>
              </div>
              <div className="col-md-4 fees">
                <h3>Population</h3>
                <p>{state.population}</p>
              </div>
              <div className="col-md-4 dates-open">
                <h3>Number of Recreational Activities</h3>
                <p>{state.recreationAreas}</p>
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
                          name={item}
                          imageUrl=""
                          state={state.name}
                          datesOpen=""
                          locations=""
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
