import React from 'react';
import { Link } from 'react-router-dom';

class Parks extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>National Parks</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">State</th>
              <th scope="col">Address</th>
              <th scope="col">Fees</th>
              <th scope="col">Open</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/yellowstone/">Yellowstone</Link></td>
              <td>Wyoming</td>
              <td>2 Officers Row, Yellowstone National Park</td>
              <td>20$/day</td>
              <td>OPEN</td>
            </tr>
            <tr>
              <td><Link to="/grandcanyon/">Grand Canyon</Link></td>
              <td>Arizona</td>
              <td>20 S Entrance Rd, Grand Canyon Village</td>
              <td>20$/day</td>
              <td>OPEN</td>
            </tr>
            <tr>
              <td><Link to="/yosemite/">Yosemite</Link></td>
              <td>California</td>
              <td>9024 Southside Dr, Yosemite National Park</td>
              <td>20$/day</td>
              <td>OPEN</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Parks;
