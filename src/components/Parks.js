import React from 'react';
import ParkCard from './ParkCard';

const parks = {
  "yosemite" : {
    name: "yosemite",
    imageUrl: "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg?width=950&quality=90&mode=crop",
    state: "california",
    address: "9024 Southside Dr, Yosemite National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
    activities: ["climbing", "camping"],
  },
  "grand-canyon" : {
    name: "the grand canyon",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/F77E8BB4-155D-451F-670C6F80B88A153E/proxy/hires?",
    state: "new-mexico",
    address: "20 S Entrance Rd, Grand Canyon Village",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.",
    activities: ["rafting", "camping"],
  },
  "yellowstone" : {
    name: "yellowstone",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/0005A3F1-1DD8-B71B-0B38A6233082EC97/proxy/hires?",
    state: "wyoming",
    address: "2 Officers Row, Yellowstone National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.",
    activities: ["climbing", "rafting"],
  },
  "yosemite2" : {
    name: "yosemite",
    imageUrl: "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg?width=950&quality=90&mode=crop",
    state: "california",
    address: "9024 Southside Dr, Yosemite National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
    activities: ["climbing", "camping"],
  },
  "grand-canyon2" : {
    name: "the grand canyon",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/F77E8BB4-155D-451F-670C6F80B88A153E/proxy/hires?",
    state: "new-mexico",
    address: "20 S Entrance Rd, Grand Canyon Village",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.",
    activities: ["rafting", "camping"],
  },
  "yellowstone2" : {
    name: "yellowstone",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/0005A3F1-1DD8-B71B-0B38A6233082EC97/proxy/hires?",
    state: "wyoming",
    address: "2 Officers Row, Yellowstone National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.",
    activities: ["climbing", "rafting"],
  },
  "yosemite3" : {
    name: "yosemite",
    imageUrl: "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg?width=950&quality=90&mode=crop",
    state: "california",
    address: "9024 Southside Dr, Yosemite National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
    activities: ["climbing", "camping"],
  },
  "grand-canyon3" : {
    name: "the grand canyon",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/F77E8BB4-155D-451F-670C6F80B88A153E/proxy/hires?",
    state: "new-mexico",
    address: "20 S Entrance Rd, Grand Canyon Village",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.",
    activities: ["rafting", "camping"],
  },
  "yellowstone3" : {
    name: "yellowstone",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/0005A3F1-1DD8-B71B-0B38A6233082EC97/proxy/hires?",
    state: "wyoming",
    address: "2 Officers Row, Yellowstone National Park",
    fees: "$20 per day",
    datesOpen: "year round",
    description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.",
    activities: ["climbing", "rafting"],
  },
}

class Parks extends React.Component {
  render() {

    const row = Object.keys(parks).map((x,i) => {
      return i % 4 === 0 ? Object.keys(parks).slice(i, i+4) : null;
    }).filter(x => x != null);

    return (
      <React.Fragment>
        <div className="model-intro">
          <h2>National Parks</h2>
        </div>

        <div className="container">

          {row.map((result, index) => {
            return (
              <div className="row">
                {result.map(item => {
                  return (
                    <div className="col-md-3 instance-container">
                      <ParkCard
                        name={parks[item].name}
                        imageUrl={parks[item].imageUrl}
                        state={parks[item].state}
                        status={parks[item].datesOpen}
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

export default Parks;
