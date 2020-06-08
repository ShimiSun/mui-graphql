/* eslint-disable new-cap */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  maxWidth: '980px',
  height: '100%',
};

// https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
export class MapContainer extends Component {
  render() {
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

MapContainer.propTypes = {
  google: PropTypes.any,
  lat: PropTypes.number,
  lon: PropTypes.number,
};

MapContainer.defaultProps = {
  google: undefined,
  lat: undefined,
  lon: undefined,
};
