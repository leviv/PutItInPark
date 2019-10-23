import React from 'react';
import ParkCard from './StateCard';

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
  "arizona1" : {
    name: "arizona",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/800px-Flag_of_Arizona.svg.png",
    recreationAreas: 653,
    population: 7172000,
    parks: ["grand-canyon"],
  },
  "california1" : {
    name: "california",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/900px-Flag_of_California.svg.png",
    recreationAreas: 1094,
    population: 39560000,
    parks: ["yosemity"],
  },
  "wyoming1" : {
    name: "wyoming",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1000px-Flag_of_Wyoming.svg.png",
    recreationAreas: 272,
    population: 577737,
    parks: ["yellowstone"],
  },
  "arizona2" : {
    name: "arizona",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Arizona.svg/800px-Flag_of_Arizona.svg.png",
    recreationAreas: 653,
    population: 7172000,
    parks: ["grand-canyon"],
  },
  "california2" : {
    name: "california",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/900px-Flag_of_California.svg.png",
    recreationAreas: 1094,
    population: 39560000,
    parks: ["yosemity"],
  },
  "wyoming2" : {
    name: "wyoming",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Wyoming.svg/1000px-Flag_of_Wyoming.svg.png",
    recreationAreas: 272,
    population: 577737,
    parks: ["yellowstone"],
  },
}

class States extends React.Component {
  render() {
    const row = Object.keys(states).map((x,i) => {
      return i % 4 === 0 ? Object.keys(states).slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>States</h2>
        </div>

        <div className="container">

          {row.map((result, index) => {
            return (
              <div className="row" key={index}>
                {result.map((item, innerIndex) => {
                  return (
                    <div className="col-md-3 instance-container" key={innerIndex}>
                      <ParkCard
                        name={states[item].name}
                        imageUrl={states[item].imageUrl}
                        recreationAreas={states[item].recreationAreas}
                        population={states[item].population}
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
}

export default States;
