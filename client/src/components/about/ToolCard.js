import React from "react";

class ToolCard extends React.Component {
  render() {
    const displayName = this.props.tool_name;

    return (
      <div className="col-md-4 instance-container">
        <div
          className="instance-card"
          style={{ backgroundImage: `url(${this.props.imageUrl})` }}
        >
          <div className="instance-overlay">
            <div className="hidden-details">
              <p>{this.props.tool_name}</p>
              <p>{this.props.description}</p>
            </div>
            <div className="details">
              <h4>{displayName}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolCard;
