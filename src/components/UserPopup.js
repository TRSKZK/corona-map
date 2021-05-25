import React from 'react'
import { Popup } from 'react-leaflet'
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

const UserPopup = (props) => {
    return (
      <StyledPopup>
        <div>
          <StylepP>
              <PopupImg
              src={props.data.flags}>
              
              </PopupImg>
          
            { props.data.country}</StylepP>
                  <StylepP>Today cases:{props.data.todayCases}</StylepP>
                  <StylepP>Today death:{props.data.todayDeath}</StylepP>
                  <StylepP>Last update: {(props.data.lastUpdate)} </StylepP>
            </div>
      </StyledPopup>
    )
}

export default UserPopup