import React from 'react';
import { Link } from 'react-router-dom';

class ParkCard extends React.Component {
  render() {
    return (
      <Link to="/states/">
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imageUrl})`}}
             >
          <div class="hidden-details">
            <p>State: {this.props.state}</p>
            <p>Status: {this.props.status}</p>
          </div>
          <div className="details">
            <p>{this.props.name}</p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ParkCard;
