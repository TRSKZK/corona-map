import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'
import styled  from 'styled-components'

const StyledContainer = styled(MapContainer)`
height:500px;
width:900px;


`


const StyledPopup = styled(Popup)`
width: 200px
`


const Map = () => {
    return (
      <StyledContainer center={[50.4523924, 30.5183588]}
        zoom={12} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[50.4523924, 30.5183588]}>
    <StyledPopup>
     I can customize it
    </StyledPopup>
  </Marker>
 </StyledContainer>
    )
}

export default Map