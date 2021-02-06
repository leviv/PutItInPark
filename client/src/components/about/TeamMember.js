import React from "react";

class TeamMember extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-5">
        <div className="team-member">
          <img src={this.props.imageUrl} alt="Team member headshot"></img>
          <div className="team-desc">
            <h3>{this.props.name}</h3>
            <p>Commits: {this.props.commits}</p>
            <p>Issues Closed: {this.props.issuesClosed}</p>
            <p>Tests: {this.props.tests}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamMember;
