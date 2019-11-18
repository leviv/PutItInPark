import React from 'react';
import { Link } from 'react-router-dom';
import { displayName, slugName } from '../helpers/Helpers.js';

class ParkCard extends React.Component {
  render() {
    const slug = slugName('/park/', this.props.park_name);
    const title = displayName(this.props.park_name);

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imglink})`}}
             >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>State: {this.props.location}</p>
              <p>No. Rec. Areas: {this.props.num_rec}</p>
              <p>No. Visitors: {this.props.visitors}</p>
              <p>Fees: ${this.props.fee}</p>
            </div>
            <div className="details">
              <h4>{title}</h4>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ParkCard;
