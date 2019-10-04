import React from 'react';
import { Link } from 'react-router-dom';

class States extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Sates</h2>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">State</th>
              <th scope="col">Top Park</th>
              <th scope="col"># of Parks</th>
              <th scope="col"># of Recreational Areas</th>
              <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Link to="/wyoming/">Wyoming</Link></td>
              <td>Yellowstone</td>
              <td>2</td>
              <td>272</td>
              <td>577,737</td>
            </tr>
            <tr>
              <td><Link to="/arizona/">Arizona</Link></td>
              <td>Grand Canyon</td>
              <td>3</td>
              <td>653</td>
              <td>7,172,000</td>
            </tr>
            <tr>
              <td><Link to="/california/">California</Link></td>
              <td>Yosemite</td>
              <td>9</td>
              <td>1,094</td>
              <td>39,560,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default States;
