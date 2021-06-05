import React, { Component } from 'react'
import {InfoWindow, Marker,GoogleApiWrapper} from "google-maps-react"
import CurrentLocation from "./Map"


export class MapBeta extends Component{
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
        <Marker draggable={true} onClick={this.onMarkerClick} name={'Current Location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
           
          </div>
           
        </InfoWindow>
      </CurrentLocation>
    );
  
  }
}

export default GoogleApiWrapper({
  apiKey:'AIzaSyARJeIBTthW0nJPJh-lUW0DnD329a8es9c'
})(MapBeta)

// export class MapBeta extends Component {
//   render() {
//     return (

//       <Map
//       google={this.props.google}
//       zoom={8}
//       style={mapStyles}
//       initialCenter={{ lat: -34.397, lng: 150.644 }}
      
//     >
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyARJeIBTthW0nJPJh-lUW0DnD329a8es9c'
// })(MapBeta)
