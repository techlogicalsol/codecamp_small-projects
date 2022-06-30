import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function ColorApp(){

    const [colorNames] = useState(['#ef5777', '#575fcf', '#4bcffa', '#34e7e4', '#0be881',
                        '#f53b57', '#3c40c6', '#0fbcf9', '#00d8d6', '#05c46b', '#ffc048',
                        '#ffdd59', '#ff5e57', '#d2dae2', '#485460', '#ffa801', '#ffd32a',
                        '#ff3f34', '#808e9b', '#1e272e', ])


    const copyColor = (e) =>{
        let color = e.target.innerText;
       // console.log(color)

       if(navigator.clipboard){
           navigator.clipboard.writeText(color);
           navigator.clipboard.readText();
           toast.success(`You have copied ${color} value successfully`, {
               position: toast.POSITION.TOP_RIGHT
           })
       }
    }

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 main_col">
                        <h1 className="text-center mb-3">
                            <strong>My Color App</strong> </h1>
                        
                        <div className="row">
                            {colorNames.map(color => (
                            <div className="col-md-3 sub-col" key={color} 
                            style={{backgroundColor: color}} onClick={copyColor}> 
                                {color}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ColorApp