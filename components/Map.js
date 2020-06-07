import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
export class MapContainer extends Component {
  render() {
    console.log("this.props.google = ", this.props);
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 29.55766,
          lng: 34.95192,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  //   apiKey: "AIzaSyB8aq-iFDGhr4nIKvZ-8GVRtsQZDemFEiE",
})(MapContainer);
