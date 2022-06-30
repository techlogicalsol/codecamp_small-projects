import React from 'react'

const Weather = ({description, city, country, error, 
    temperature, temperature1, minTemperature, maxTemperature, 
    feelLike, humidity, windSpeed, windGust, visibility})=>{


function abc(){
    if(description === 'clear sky'){
        return<img src='/img/clear.png' />
    
    }else if(description === 'clouds' || description === 'broken clouds' || description === 'overcast clouds' || 'scattered clouds'){
        return <span className="icon"><i className="fas fa-cloud"></i></span>
    
    }else if(description === 'smoke'){
        return <span className="icon"><i className="fas fa-smog"></i></span>
    
    }else if(description === 'haze'){
        return<img src='/img/haze.png' />
    
    }
    
    
    else{
        return 'no image found'
    }
}


    

    return(
        <>
            {<p>City: {city} </p>}

            {<p>Country: {country}</p>}

            {<p>Temperature in Fahrenheit: {temperature} F </p>}

            {<p>Temperature in Celsius: {temperature1} C </p>}

            {<p>Minimum: {minTemperature} </p>}

            {<p>Maximum: {maxTemperature}</p>}

            {<p>Feel Like: {feelLike}</p>}

            {   <p>Weather Condition: {description} </p>}


            {<p>Humidity: {humidity}</p>}

            {<p>Wind Speed: {windSpeed}</p>}

            {<p>Wind Gust: {windGust}</p>}

            {<p>visibility: {visibility} KM</p>}

            {<p> {error} </p>}

            {description && abc()}

        </>
    )
}

export default Weather