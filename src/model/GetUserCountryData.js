


const getUserCoords = async () => {
    return new Promise((res, rej) => {
      navigator.geolocation.getCurrentPosition(res, rej)
    })
  }
  
  const getUserCountryData = async () => {
    try {
     
      const location = await getUserCoords();
      const { latitude, longitude } = location.coords 
      console.log(latitude, longitude);
  
      const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
      const {country }= await response.json()
      
  
  
      const responseUserCountry= await fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
      const dataUserDeseas = await responseUserCountry.json()
      console.log(dataUserDeseas);
    
       
    
    } catch (e) {
      console.error(`${e.message}`)
    }
  }
  
  getUserCountryData()