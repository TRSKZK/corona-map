import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React from 'react'
import styled  from 'styled-components'

const StyledContainer = styled(MapContainer)`
height:500px;
width:700px;


`
const Map = () => {
    return (
        <StyledContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
 </StyledContainer>
    )
}

export default Map