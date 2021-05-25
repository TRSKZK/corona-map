import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Map from '../src/components/MapComponent'
import SearchForm from './components/SearchForm'
import { getUserCountryData } from './model/GetUserCountryData'




const Container = styled.main`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
`

const App = () => {
    return (
        <Container> 
            <SearchForm/>
            <Map/>
        </Container>
        
    )
}


ReactDOM.render(<App/>, document.getElementById(`app`))