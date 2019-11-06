import React from 'react';
import { Link } from 'react-router-dom';

class ParkCard extends React.Component {
  render() {
    const slug = '/park/' + this.props.park_name.replace(/\s+/g, '-').toLowerCase();
    const displayName = this.props.park_name.replace(/-+/g, ' ')

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imglink})`}}
             >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>State: {this.props.location}</p>
              <p>No. Rec. Areas: {this.props.num_rec}</p>
              <p>Fees: ${this.props.fee}</p>
            </div>
            <div className="details">
              <h4>{displayName}</h4>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ParkCard;
