import React from 'react';
import { Link } from 'react-router-dom';

class StateCard extends React.Component {
  render() {
    const slug = '/state/' + this.props.name.replace(/\s+/g, '-').toLowerCase();
    const displayName = this.props.name.replace(/-+/g, ' ');

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imglink})`}}
             >
          <div className="instance-overlay">
            <div class="hidden-details">
              <p>No. Parks: {this.props.num_parks}</p>
              <p>No. Rec Areas: {this.props.numrec}</p>
              <p>Population: {this.props.pop}</p>
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

export default StateCard;
