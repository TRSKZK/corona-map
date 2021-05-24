import React, {useState, useEffect} from 'react';
import { Marker, useMapEvents} from 'react-leaflet';
import UserPopup from './UserPopup';
import { getUserCountryData } from '../model/GetUserCountryData';





const LocationMarker = () => {
  const [location, setLocation]=useState([])
  useEffect(async () => {
    const data = await getUserCountryData()
    setLocation(data)
  }, [])
  const countryInfo= location.map(item=> item.countryInfo)
console.log(countryInfo);
  return (
    <>
    
      
      {/* <Marker position={[30, 50]}>
      <UserPopup/>
      </Marker> */}

      {
        countryInfo.map(item => {
          return (
            <Marker position={[item.lat, item.long]}>
      <UserPopup/>
      </Marker>
          )
        })
      }

      
       
      

    </>
     
  )
  
}
  
export default LocationMarker