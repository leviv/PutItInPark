import React from 'react';
import { Link } from 'react-router-dom';

class ActivityCard extends React.Component {
  render() {
    const slug = '/activity/' + this.props.name.replace(/\s+/g, '-').toLowerCase();

    return (
      <Link to={slug}>
        <div className="instance-card small-card"
             style={{ backgroundImage: `url(${this.props.imageUrl})`}}
             >
          <div className="instance-overlay">
            <div class="hidden-details">
              <p>Fees: {this.props.fees}</p>
              <p>Dates Open: {this.props.datesOpen}</p>
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

export default ActivityCard;
