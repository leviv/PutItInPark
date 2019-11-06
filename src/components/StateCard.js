import React from 'react';
import { Link } from 'react-router-dom';

class StateCard extends React.Component {
  render() {
    const slug = '/state/' + this.props.name.replace(/\s+/g, '-').toLowerCase();

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imageUrl})`}}
             >
          <div className="instance-overlay">
            <div class="hidden-details">
              <p>No. Parks: {this.props.num_parks}</p>
              <p>No. Rec Areas: {this.props.recreationAreas}</p>
              <p>Population: {this.props.population}</p>
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

export default StateCard;
