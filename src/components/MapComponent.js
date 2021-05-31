import { MapContainer, TileLayer, useMapEvents, Marker, Popup} from 'react-leaflet'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import LocationMarker from './LocationMarker'

const StyledContainer = styled(MapContainer)`
height:500px;
width:900px;
`

const getUserCoords = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej)
  })
}



const Map = () => {
  return (
      
    <StyledContainer   center={[51.505, 30.09]}
        zoom={2} scrollWheelZoom={false}>
  <TileLayer 
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        <LocationMarker/>
       
        
    </StyledContainer>
    
    )
}

export default Map