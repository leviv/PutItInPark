import React from "react";

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      lon: this.props.lon,
      title: this.props.title,
    };
  }

  render() {
    const zoomLevel = 8;
    const mapUrl = `https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=${this.state.lat},${this.state.lon}(${this.state.title})&t=&z=${zoomLevel}&ie=UTF8&iwloc=B&output=embed`;

    return (
      <div className="map-container">
        <iframe
          title="Google map for National park"
          src={mapUrl}
          width="100%"
          height="100%"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          loading="lazy"
        />
      </div>
    );
  }
}

export default Map;
