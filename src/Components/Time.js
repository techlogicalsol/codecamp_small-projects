import React, { useState } from 'react'

function Time(){

    let newTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(newTime)

    const update = ()=>{
        newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }
    setInterval(update, 1000)


    let newDate = new Date()

    let weekday = new Array(7)
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let day = weekday[newDate.getDay()];

    const getCurrentDate=(sep = '-')=>{

        let monthList = new Array(12)
        monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    let NewDay = new Date().getDate();
    let month = new Date().getMonth();
    let myMonth = monthList[month]
    let year = new Date().getFullYear();

    return `${year}${sep}${myMonth}${sep}${NewDay}`
    }
    


    return(
        <>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto p-5">
                        <h1 className='text-center mb-5'>
                           <strong>My Digital Clock</strong> 
                        </h1>                        
                        
                        <div className="myclock mx-auto">
                        <div className="spinner-grow text-dark myspin1">
                        <i class="fas fa-running"></i>
                        </div>
                        <span>
                         <p id="day">{day}</p>   
                         <p>
                        <div className="spinner-grow text-info myspin2">
                            <i class="far fa-clock"></i>
                        </div>
                        {time}</p>    
                         <p>{getCurrentDate()}</p>
                        </span>
                        </div>
                                                
                    </div>
                </div>
            </div>
    
        </>
    )
}

export default Time