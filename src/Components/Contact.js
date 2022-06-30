import React, { useState } from 'react';


function Contact(){

    const [inputList, setIputList] = useState('');   

    const itemEvent = (event)=>{
        setIputList(event.target.value)
    }


    const [item, setItem] = useState([]);

    //Add Button

    const addItem =()=>{
        setItem((oldItems)=>{
            return[...oldItems, inputList]
        })
    
        setIputList('')
    }


    const remove = id =>{
        if(window.confirm("Do you want to delete this contact?"))
        {
            item.forEach((val, index)=>{
                if(val.id === id){
                    item.splice(index, 1)
                }
            })
            setItem([...item])
        }
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4 mx-auto flex-wrap">

                <div className="card mb-3">
                <div className="card-header text-white bg-primary">Contacts</div>
                <div className="card-body">
                
                <div className="form-group">
                <input type="text" 
                        className="form-control"
                        placeholder="Name and Mobile"
                        value={inputList}
                        onChange={itemEvent}
                        
                        />
                </div>
                </div>
                </div>
                        
                    <div className="row">
                       {item.map((itemVal, index)=>(
                       <div className="col-md-10 mx-auto 
                       bg-light col-body mt-3">
                           <div className="name">   
                           <span className="circle">
                               <p>{itemVal.slice(0,1)}</p></span>
                              <p>
                            
                                  {itemVal}
                              </p> 
                              
                           
                                <p className="delete" 
                                onClick={()=> remove(item.id)}>
                                    <i class="fas fa-trash">
                                    </i>
                                </p>
                                
                              </div>
                          
                       </div>
                       ))}
                   </div>
                   <button 
                    className="btn btn-warning myBtn"
                    onClick={addItem}>
                        <i className="fas fa-plus"></i>
                    </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact