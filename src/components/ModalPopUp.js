import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ModalWrapp = styled.div`
position:absolute;
padding: 50px;
top:200px;
left:300px;
right:200px;
height: 300px;
max-width: 700px;
background-color:#f1ecec;
z-index: 1000;
display: ${props=> props.show ? "block": 'none'}


`
const Flag = styled.div`
width:150px;
height:100px;
background: url(${props => props.url ? props.url.flag : null});
background-size: cover;
`
const ListInfo = styled.ul`
list-style: none;
`
const CloseBtn = styled.button`
width:30px;
height: 30px;
margin: 0 0 0 600px;

`
const ModalPopUp = ({data, display}) => {
const [display1 = display, setDisplay] = useState(false)

    return (
        < ModalWrapp show={display}>
            <CloseBtn onClick={()=> setDisplay(false)}><FontAwesomeIcon icon={faTimes}/></CloseBtn>
            <Flag url={data.countryInfo}></Flag>
            <ListInfo >
                <li>Total cases: {data.cases }</li>
                <li>Today cases: {data.todayCases }</li>
                <li>Deaths: {data.deaths }</li>
                <li>Today deaths: {data.todayDeaths }</li>
                <li>Recovered: {data.recovered }</li>
                <li>Active: {data.active }</li>
            </ListInfo>
        </ModalWrapp>
)


}


export default ModalPopUp