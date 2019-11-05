import React from 'react';
import { Link } from 'react-router-dom';

class ParkCard extends React.Component {
  render() {
    const slug = '/park/' + this.props.name.replace(/\s+/g, '-').toLowerCase();

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imageUrl})`}}
             >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>State: {this.props.state}</p>
              <p>Number of Rec. Areas: {this.props.numActivities}</p>
              <p>Fees: ${this.props.fees}</p>
            </div>
            <div className="details">
              <h4>{this.props.name}</h4>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default ParkCard;
