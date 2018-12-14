import React, { Component } from 'react'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`

export class MyMap extends Component {
  state = {
    showingInfoWindow: false, // Hides or the shows the infoWindow
    activeMarker: {}, // Shows the active marker upon click
    selectedPlace: {}, // Shows the infoWindow to the selected place upon a marker
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <MapContainer>
        <Map
          google={this.props.google}
          zoom={18}
          initialCenter={{ lat: 39.130121, lng: -76.792478 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name="Millennium Marketing Solutions"
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </MapContainer>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBoWrSHgKv9M1pBU5NebahO66UtQPsIUkI',
})(MyMap)
