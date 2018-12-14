import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 39.130120,
      lng: -76.792479
    },
    zoom: 18
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '500px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBoWrSHgKv9M1pBU5NebahO66UtQPsIUkI' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.130120}
            lng={-76.792479}
            text={'Millennium'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
