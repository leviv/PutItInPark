import React from 'react';
import { Link } from 'react-router-dom';

class Recreations extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Recreations</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Activity</th>
              <th scope="col">Location</th>
              <th scope="col">Fees</th>
              <th scope="col">Permit Req</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/climbing/">Climbing</Link></td>
              <td>Yosemite, Yellowstone</td>
              <td>$100/day</td>
              <td>yes</td>
              <td>OPEN</td>
            </tr>
            <tr>
              <td><Link to="/camping/">Camping</Link></td>
              <td>Grand Canyon, Yosemite</td>
              <td>$30/day</td>
              <td>no</td>
              <td>OPEN</td>
            </tr>
            <tr>
              <td><Link to="/rafting/">Rafting</Link></td>
              <td>Grand Canyon, Yellowstone</td>
              <td>$150/day</td>
              <td>yes</td>
              <td>OPEN</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Recreations;
