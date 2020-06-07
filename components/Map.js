import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

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
        zoom={7}
        style={mapStyles}
        initialCenter={{
          lat: `${this.props.lat}`,
          lng: `${this.props.lon}`,
        }}
      >
        <Marker />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  //   apiKey: "AIzaSyB8aq-iFDGhr4nIKvZ-8GVRtsQZDemFEiE",
})(MapContainer);
