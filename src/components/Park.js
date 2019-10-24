import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import ActivityCard from './ActivityCard';
import NotFound from './NotFound';

const parks = {
  "yosemite" : {
    name: "yosemite",
    imageUrl: "https://www.nps.gov/common/uploads/grid_builder/yose/crop16_9/2A84C724-1DD8-B71B-0B0F4361A736E640.jpg?width=950&quality=90&mode=crop",
    state: "california",
    latitude: "37.84883288",
    longitude: "-119.5571873",
    fees: 30.000,
    visitors: 4161087,
    weather: "Yosemite receives 95% of its rainfall...",
    description: "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
    activities: ["climbing", "camping"],
  },
  "the-grand-canyon" : {
    name: "the grand canyon",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/F77E8BB4-155D-451F-670C6F80B88A153E/proxy/hires?",
    state: "new-mexico",
    latitude: "37.84883288",
    longitude: "-119.5571873",
    fees: 30.000,
    visitors: 4161087,
    weather: "Yosemite receives 95% of its rainfall...",
    description: "Unique combinations of geologic color and erosional forms decorate a canyon that is 277 river miles (446km) long, up to 18 miles (29km) wide, and a mile (1.6km) deep. Grand Canyon overwhelms our senses through its immense size.",
    activities: ["rafting", "camping"],
  },
  "yellowstone" : {
    name: "yellowstone",
    imageUrl: "https://www.nps.gov/npgallery/GetAsset/0005A3F1-1DD8-B71B-0B38A6233082EC97/proxy/hires?",
    state: "wyoming",
    latitude: "37.84883288",
    longitude: "-119.5571873",
    fees: 30.000,
    visitors: 4161087,
    weather: "Yosemite receives 95% of its rainfall...",
    description: "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. From the dazzling eruptions of geysers, to the prismatic colors of thermophilic communities, to the natural sounds whispering or thundering through the landscape, Yellowstone is a feast for the senses.",
    activities: ["climbing", "rafting"],
  },
}

class Park extends React.Component {
  render() {
    const { match } = this.props;
    const park = parks[match.params.parkName]

    // Valid park
    if (park !== undefined){

      const row = park.activities.map((x,i) => {
        return i % 4 === 0 ? park.activities.slice(i, i+4) : null;
      }).filter(x => x != null);

      return (
        <React.Fragment>
          <div className="instance-intro"
               style={{ backgroundImage: `url(${park.imageUrl})`}}>
            <h1><span>{park.name}</span></h1>
          </div>

          <div className="container instance">
            <h3>Description</h3>
            <p>{park.description}</p>
            <p>{park.weather}</p>

            <div className="row">
              <div className="col-md-4 state">
                <h3>State</h3>
                <p><Link to={getSlug('state', park.state)}>{park.state}</Link></p>
              </div>
              <div className="col-md-4 fees">
                <h3>Park Fees</h3>
                <p>${park.fees} admission</p>
              </div>
              <div className="col-md-4 visitors">
                <h3>Annual Visitors</h3>
                <p>{park.visitors}</p>
              </div>
            </div>

            <h3>Activities</h3>
            {row.map((result, index) => {
              return (
                <div className="row" key={index}>
                  {result.map((item, innerIndex) => {
                    return (
                      <div className="col-md-3 instance-container" key={innerIndex}>
                        <ActivityCard
                          name={item}
                          imageUrl=""
                          fees=""
                          datesOpen=""
                          locations=""
                        />
                      </div>
                    );
                  })}
                </div>
              );
           })}

           <h3>Addresss</h3>
           <p>{park.address}</p>
           <div className="map-container">
             <Map
               google={this.props.google}
               zoom={8}
               style={{width: '100%', height: '100%', position: 'relative'}}
               initialCenter={{ lat: park.latitude, lng: park.longitude}}
             >
               <Marker position={{ lat: park.latitude, lng: park.longitude}} />
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
