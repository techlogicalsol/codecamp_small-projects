import React, { useEffect, useState } from 'react'
import UpdateWeather from './UpdateWeather';

function NewWeather(){

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const[data, setData] = useState([]);

    const APIKEY = '598f7275273fdc2ce7ecc1cdc5445d3a';

    useEffect(()=>{

        const fetchData = async () => {

        navigator.geolocation.getCurrentPosition(function(position){
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });

        console.log("Latitude is:", lat)
        console.log("Longitutde is:", long)
    
    

        await fetch(`api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${APIKEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }
      fetchData();
    }, [lat,long])

    return(
        <>
        


            
            
       

                <UpdateWeather weatherData={data}/>
   
            
        
         </>
    
    )
}

export default NewWeather