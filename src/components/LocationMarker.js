import React, {useState, useEffect} from 'react';
import { Marker} from 'react-leaflet';
import { getCountrysData } from '../model/GetUserCountryData';
import UserPopup from './UserPopup';





const LocationMarker = () => {
  const [location, setLocation]=useState([])
  useEffect(async () => {
    const data = await getCountrysData()
    setLocation(data)
  }, [])
  
  
  return (
    <>
      {
        location.map((item, i) => {
          const data = {
            country: item.country,
            todayCases: item.todayCases,
            todayDeath: item.todayDeaths,
            flags: item.countryInfo.flag,
            lastUpdate: new Date(item.updated).toLocaleDateString('UA')
          }
          return (
            <Marker key={i} position={[item.countryInfo.lat, item.countryInfo.long]}>
              <UserPopup data={data}/>
            </Marker>
          )
        })
      }
    </>
     
  )
  
}
  
export default LocationMarker