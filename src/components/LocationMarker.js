import React, {useState} from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import UserPopup from './UserPopup';





const LocationMarker=()=> {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position}>
        <UserPopup/>
      </Marker>
    )
}
  
export default LocationMarker