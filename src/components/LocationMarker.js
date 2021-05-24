import React, {useState, useEffect} from 'react';
import { Marker, Popup} from 'react-leaflet';
import { getUserCountryData } from '../model/GetUserCountryData';
import styled from 'styled-components'

const StyledPopup = styled(Popup)`
width: 200px;
.leaflet-popup-content-wrapper {
  height: 100px;
  border-radius: 10px;
  background-color: #7f7f7f;
}
.leaflet-popup-tip{
  background-color: #7f7f7f;
}
.leaflet-popup-content p {
  margin:0;
}

`

const PopupImg = styled.img`
width:30px;
height30px;
margin-right:5px;

`
const StylepP = styled.p`
color: #ffff;

`



const LocationMarker = () => {
  const [location, setLocation]=useState([])
  useEffect(async () => {
    const data = await getUserCountryData()
    setLocation(data)
  }, [])
  console.log(location);
  
  
  return (
    <>
      
      

      {
        location.map((item,i) => {
          return (
            <Marker key={i} position={[item.countryInfo.lat, item.countryInfo.long]}>
              <StyledPopup>
                <div>
                  <StylepP> <PopupImg src={item.countryInfo.flag} />Country:{item.country}</StylepP>
                  <StylepP>Today cases:{item.todayCases}</StylepP>
                  <StylepP>Today death:{item.todayDeaths}</StylepP>
                  <StylepP>Last update: {new Date(item.updated).toLocaleDateString('UA')} </StylepP>
                  </div>
                  </StyledPopup>
            </Marker>
          )
        })
      }

    </>
     
  )
  
}
  
export default LocationMarker