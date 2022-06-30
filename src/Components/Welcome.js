import React, { useState } from 'react'

function Welcome(){

    let currentDate = new Date().toLocaleString()

    const [time, setTime] = useState(currentDate)

    const update =()=>{
        currentDate = new Date().toLocaleString()
        setTime(currentDate)
    }
    setInterval(update, 100)


    //New Function

    let hours = new Date().getHours()

    let greeting = '';

    let myStyle = {};


    if(hours >=1 && hours < 12){
        greeting = "Good Morning";
        myStyle.color = "#fff700";
        myStyle.backgroundImage = `url(/img/morning.jpg)`
        myStyle.width = '500px';
        myStyle.height = '450px'
        myStyle.backgroundPosition = 'center';
        myStyle.backgroundSize = 'cover'
        myStyle.backgroundRepeat = 'no-repeat'
        myStyle.borderRadius = '10px'
        
        
    }
    else if(hours >=12 && hours < 19){
        greeting = "Good Evening";
        myStyle.backgroundImage = `url(./img/evening.jpg)`;
        myStyle.width = '500px';
        myStyle.height = '450px'
        myStyle.backgroundPosition = 'center';
        myStyle.backgroundSize = 'cover'
        myStyle.backgroundRepeat = 'no-repeat'
        myStyle.borderRadius = '10px'
        myStyle.color = '#d4cccc';

    
    }
    else{
        greeting = "Good Night"
        myStyle.backgroundImage = `url(./img/night.jpg)`;
        myStyle.width = '500px';
        myStyle.height = '450px'
        myStyle.backgroundPosition = 'center';
        myStyle.backgroundSize = 'cover'
        myStyle.backgroundRepeat = 'no-repeat'
        myStyle.borderRadius = '10px'
        myStyle.color = '#ddd';
    }


    return(
    <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-6 mx-auto col-main">
                    <h1 className="text-center"><strong>SAMSUNG A02S</strong></h1>
                     
                    <div className="main">
                        <p style={myStyle}>{greeting}</p>
                        <h2>{currentDate}</h2>
                        
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}
export default Welcome