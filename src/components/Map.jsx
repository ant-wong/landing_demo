import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import marker from '../img/placeholder.svg'

const google = window.google

class Location extends Component  {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    console.log(google)
    return (
      <Map google={this.props.google}
        style={{ 
          width: '100%', 
          height: '60vh', 
          position: 'relative', 
          top: '10vh', 
          left: '5rem',
          
        }}
        initialCenter={{
          lat: 49.2850486,
          lng: -123.1147231
        }}
        zoom={14}>
        <Marker
          name={'COMPANY NAME'}
          onClick={this.onMarkerClick}
          position={{ 
            lat: 49.2850486, 
            lng: -123.1147231 
          }} 
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>
            <h2 className="mapMarker">{this.state.selectedPlace.name}</h2>
            <p>Come visit us for a tour! Book by reaching out to us by email --></p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrDFix5diA8PHK4LbXni4cql_4C0uYWE4'
})(Location)