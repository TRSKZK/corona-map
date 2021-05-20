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

`
const StylepP = styled.p`
color: #ffff;
`

const UserPopup = () => {
    return (
        <StyledPopup className="request-popup">
            <div>
              <PopupImg
                src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/149_check_ok-512.png'></PopupImg>
              <StylepP>Cases:</StylepP>
              <StylepP>Cases:</StylepP>
              <StylepP>Cases:</StylepP>
           </div>
    </StyledPopup>
    )
}

export default UserPopup