import React, { useEffect } from 'react'
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

// Map styling CSS
const mapStyles = {        
    height: "50vh",
    width: "100%"};
    
export default function MapComp() {
      // state hook and initial coordinates
  const [ currentPosition, setCurrentPosition ] = useState({
    lat: 24.856989618794938,
      lng: 67.00358817634353
  });

//passing the live coordinates to variable 
  const current = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
    setCurrentPosition(currentPosition);
    console.log(currentPosition);
  };

  // On Marker Drag
  const onMarkerDragEnd = (e) => {
    const currentPosition = {
     lat: e.latLng.lat(),
    lng : e.latLng.lng()
    }
    setCurrentPosition(currentPosition)
    console.log(currentPosition);
  };

  // OnClick live Button
  const onUpdate = () =>{
    navigator.geolocation.getCurrentPosition(current);
    
  }
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(current)
  //    },[])

    return (
<div> 
       <NavBar />
        <LoadScript
        googleMapsApiKey='AIzaSyARJeIBTthW0nJPJh-lUW0DnD329a8es9c'>
          <GoogleMap
            mapContainerStyle={mapStyles}
             zoom={16}
            center={currentPosition} 
            >
              {
          currentPosition.lat ? 
            <Marker
            position={currentPosition}
            onDragEnd={(e) => onMarkerDragEnd(e)}
            draggable={true} /> :
            null
          }
        
          </GoogleMap>
        

          </LoadScript>
          </div>
    )
}
