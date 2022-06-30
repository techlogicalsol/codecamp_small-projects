import React, { useState } from 'react'
import FormWeather from './FormWeather'
import Weather from './Weather';

function WeatherApp(){
   
const [weather, setWeather] = useState([])

// const [city, setCity] = useState([])

// const handleCity = e =>{
//   setCity(e.target.value)
// }

// const [country, setCountry] = useState([])

// const handleCountry = e =>{
//   setCountry(e.target.value)
// }


const APIKEY = '598f7275273fdc2ce7ecc1cdc5445d3a';

async function fetchData(e) {

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

      e.preventDefault()

    const apiData = await 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${city}, ${country}&APPID=${APIKEY}`)
    
      .then( res => res.json())
      .then(data => data)
      if(city && country) {
      setWeather({
        data: apiData,
        city: apiData.name,
        country: apiData.sys.country,
        minTemperature: Math.round(apiData.main.temp_min - 273.15),
        maxTemperature: Math.round(apiData.main.temp_max - 273.15),
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
        temperature1: Math.round(apiData.main.temp - 273.15),
        feelLike: Math.round(apiData.main.feels_like - 273.15),
        humidity: apiData.main.humidity,
        windSpeed: apiData.wind.speed,
        windGust: apiData.wind.gust,
        visibility: apiData.visibility / 1000,
        error:"",
        
        
      }
        

      )} 

      
      
      
      else {
        setWeather({
          data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          temperature1: '',
          feelLike: '',
          humidity: '',
          windSpeed: '',
          windGust: '',
          visibility: '',
          error: "Please Type A City And Country"
      }
      )}
  }


    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <h2 className="text-center">Weather App</h2>

                        <FormWeather 
                        
                        getWeather={fetchData}

                        // mycity={city}
                        // handleCity={handleCity}
                        // country={country}
                        // handleCountry={handleCountry}
                        />
                        
                        <div className="row">
                            <div className="col-md-12">
                              
                              <Weather 
                                    city={weather.city}
                                    country={weather.country}
                                    description={weather.description}
                                    temperature={weather.temperature}
                                    temperature1={weather.temperature1}
                                    minTemperature={weather.minTemperature}
                                    maxTemperature={weather.maxTemperature}
                                    feelLike={weather.feelLike}
                                    humidity={weather.humidity}
                                    windSpeed={weather.windSpeed}
                                    windGust={weather.windGust}
                                    visibility={weather.visibility}
                                    error={weather.error}
                                    
                              /> 

                            {console.log(weather.data)}
                               
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
            


        </>
    )
}

export default WeatherApp