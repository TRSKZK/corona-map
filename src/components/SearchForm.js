import React,{useState} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModalPopUp from './ModalPopUp'

const SearchInput = styled.input`
width:300px;
height: 30px;
border: #808080 solid 2px;
border-radius: 20px;
&:focus{
    outline:none;
}
`

const SubmitButton = styled.button`
height: 30px;
border:#808080 solid 2px;
border-radius: 10px;
margin: 0 0 0 10px;
background-color: #ffff;


`

const Form = styled.form`
max-width: 400px;
margin: 30px 0 0 0;
padding: 0 0 30px 0;
`

const SearchForm = () => {
    const [country, setCountry] = useState(``);
    const [fetchedData, setFetchedData] = useState({})
    let [modalDisplay, setModalDisplay] = useState(false)

    const getSpecificCountryData = async () => {
        try {
            const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
            const data = await response.json()
            setFetchedData(data)
        } catch (e) {
            console.error(`${e.message}💥💥💥`);
        }
    }
console.log(fetchedData);


    


    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            getSpecificCountryData();
            setModalDisplay(!modalDisplay) 
        }}>
            <SearchInput type='text'
                placeholder='Enter country name'
                value={country}
                onChange={ (e)=>setCountry(e.target.value)}/>
            
            <SubmitButton type="submit"><FontAwesomeIcon icon={faSearch} /></SubmitButton>
            <ModalPopUp display={modalDisplay} data={fetchedData}></ModalPopUp>
        </Form >
    )

}

export default SearchForm