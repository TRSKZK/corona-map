import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ModalPopUp from './ModalPopUp'

import { fromEvent } from 'rxjs';
import { pluck, debounceTime, distinctUntilChanged } from 'rxjs/operators';




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


    useEffect(() => {
        const country$ = fromEvent(document.getElementById('input'), 'keyup')
       const sub =  country$.pipe(
            debounceTime(300),
            pluck('target','value'),
            distinctUntilChanged()
        ).subscribe(setCountry)

        return ()=> sub.unsubscribe()

    },[])

    const getSpecificCountryData = async () => {
        try {
            const response = await fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
            const data = await response.json()
            setFetchedData(data)
        } catch (e) {
            console.error(`${e.message}💥💥💥`);
        }
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            getSpecificCountryData();
            setModalDisplay(!modalDisplay) 
        }}>
            <SearchInput type='text'
                placeholder='Enter country name'

                id="input"/>

            
            <SubmitButton type="submit"><FontAwesomeIcon icon={faSearch} /></SubmitButton>
            <ModalPopUp display={modalDisplay} data={fetchedData}></ModalPopUp>
        </Form >
    )

}

export default SearchForm