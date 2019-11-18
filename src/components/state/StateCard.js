import React from 'react';
import { Link } from 'react-router-dom';
import { displayName, slugName } from '../helpers/Helpers.js';

class StateCard extends React.Component {
  render() {
    const slug = slugName('/state/', this.props.name);
    const title = displayName(this.props.name);

    return (
      <Link to={slug}>
        <div className="instance-card"
             style={{ backgroundImage: `url(${this.props.imglink})`}}
             >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>No. Parks: {this.props.num_parks}</p>
              <p>No. Rec Areas: {this.props.numrec}</p>
              <p>Population: {this.props.pop}</p>
              <p>Mail Code: {this.props.mail_code}</p>
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

export default StateCard;
