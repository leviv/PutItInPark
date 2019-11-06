import React from 'react';
import { Link } from 'react-router-dom';

class RecreationCard extends React.Component {
  render() {
    const slug = '/recreation/' + this.props.rec_name.replace(/\s+/g, '-').toLowerCase();
    const displayName = this.props.rec_name.replace(/-+/g, ' ');

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imglink})`}}
             >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>Number of Activities: {this.props.num_activities}</p>
              <p>Reservable: {"" + this.props.reservable}</p>
              <p>Stay Limit: {"" + this.props.stay_limit}</p>
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

export default RecreationCard;
