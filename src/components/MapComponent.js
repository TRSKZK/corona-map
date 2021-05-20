import { MapContainer, TileLayer, useMapEvents, Marker, Popup} from 'react-leaflet'
import React, {useState} from 'react'
import styled from 'styled-components'
import LocationMarker from './LocationMarker'

const StyledContainer = styled(MapContainer)`
height:500px;
width:900px;
`




const Map = () => {


    return (
      <StyledContainer   center={[50.4523924, 30.5183588]}
        zoom={12} scrollWheelZoom={false}>
  <TileLayer 
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
        <LocationMarker />
       
        
 </StyledContainer>
    )
}

export default Map