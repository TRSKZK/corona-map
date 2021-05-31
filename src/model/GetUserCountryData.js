



  export const getCountrysData = async () => {
    try {
     
      
      const counriesInfo = await fetch("https://disease.sh/v3/covid-19/countries")
      const data = await counriesInfo.json()
     
    
       return data
    
    } catch (e) {
      console.error(`${e.message}`)
    }
  }
  
  getCountrysData()