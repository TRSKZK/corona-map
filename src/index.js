import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Map from '../src/components/MapComponent'


const StyledH = styled.h1`
color: red;
`


const App = () => {
    return (
        <> 
            <StyledH>HEllo bloody world</StyledH>
            <Map/>
        </>
        
    )
}


ReactDOM.render(<App/>, document.getElementById(`app`))