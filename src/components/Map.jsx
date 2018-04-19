import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const google = window.google

class Location extends Component  {
  render() {
    return (
      <div>
        <Map google={this.props.google}
          style={{ width: '600px', height: '400px', position: 'relative' }}
          className='map'
          zoom={14}>
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 37.778519, lng: -122.405640 }} />
          <Marker
            name={'Dolores park'}
            position={{ lat: 37.759703, lng: -122.428093 }} />
          <Marker />
          {/* <Marker
            name={'Your position'}
            position={{ lat: 37.762391, lng: -122.439192 }}
            icon={{
              url: "/path/to/custom_icon.png",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }} /> */}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDrDFix5diA8PHK4LbXni4cql_4C0uYWE4'
})(Location)