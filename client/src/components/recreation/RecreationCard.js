import React from "react";
import { Link } from "react-router-dom";
import { displayName, slugName } from "../../helpers/Helpers.js";

class RecreationCard extends React.Component {
  render() {
    const slug = slugName("/recreation/", this.props.rec_name);
    const title = displayName(this.props.rec_name);
    const reservable = this.props.reservable === "0" ? "No" : "Yes";
    const stay_limit = this.props.stay_limit === "0" ? "No" : "Yes";

    return (
      <Link to={slug}>
        <div
          className="instance-card"
          style={{ backgroundImage: `url(${this.props.imglink})` }}
        >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>Number of Activities: {this.props.num_activities}</p>
              <p>Reservable: {reservable}</p>
              <p>Stay Limit: {stay_limit}</p>
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

export default RecreationCard;
