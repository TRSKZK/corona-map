import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Map from '../src/components/MapComponent'
import SearchForm from './components/SearchForm'






const Container = styled.main`
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;
`

const App = () => {

    const flag = "https://disease.sh/assets/img/flags/be.png"
    return (
        <Container> 
            <SearchForm/>
            <Map />
        </Container>
        
    )
}


ReactDOM.render(<App/>, document.getElementById(`app`))