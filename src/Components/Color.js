import React, { useState } from 'react'



function Color(){

    const colorNames = [
        '#f44336', '#f6685e',
        '#e91e63', '#ed4b82',
        '#6d1b7b', '#9c27b0',  
        '#6573c3', '#1769aa',
        '#2196f3', '#4dabf5',
        '#0276aa', '#03a9f4',
        '#35baf6', '#008394',
        '#00bcd4', '#33c9dc',
        '#8f9a27',
        '#d7e360', '#b2a429',
        '#ffeb3b', '#ffef62',
        '#ab003c', '#f50057',
        '#f73378'
]

    const [bg, setBg] = useState(colorNames)
    

    const updateColor = () =>{
        let newBg = [
            '#af52bf', '#482880',
            '#673ab7', '#673ab7',
            '#2c387e', '#3f51b5',
        ]
        setBg(newBg)
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="text-center">
                           <strong>Color Picker</strong> 
                        </h1>
                       
                       <div className="row">
                           {bg.map(color =>(
                           <div className="col-sm-2 color-col"
                           style={{backgroundColor: color}}
                           >
                               {color}
                           </div>
                           ))}
                       </div>
                    
                       <button className="btn btn-primary btn-block mt-3" onClick={updateColor}>Click Me</button> 
                    </div>
                    
                </div>
            </div>


        </>
    )
}


export default Color