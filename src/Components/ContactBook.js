import React, { useEffect, useState } from 'react'
import contactList from '../Shared/ContactInfo'

function ContactBook(){

    //Initial work
    //const[contact, setContact] = useState(contactList)

    //SEARCH
    const [searchResult, setSearchResult] = useState(contactList)
    const [searchContact, setSearchContact] = useState('')


    const handleChange = event =>{
        setSearchContact(event.target.value)
    }

    useEffect(()=>{
        const result = contactList.filter(person => 
            person.contactName.toLowerCase().includes(searchContact)
            );
            setSearchResult(result)
            

    },[searchContact])


    //NAME

    const[contactName, setContactName] = useState('');

    const handleName = e =>{
        setContactName(e.target.value)
    }

    //MOBILE

    const[mobile, setMobile] = useState('')

    const handleMob = e =>{
        setMobile(e.target.value)
    }

    //ADD BUTTON

    const handleSubmitForm = e =>{
        e.preventDefault()

        if(contactName !== '' && mobile !== ''){
        const list = {contactName, mobile}
        
        setSearchResult([...searchResult, list])

        setContactName('')
        setMobile('')
        
    }else{
        alert('Invalid')
    }
    }

    const remove = id =>{
        if(window.confirm('Do you want to delete this contact?')){
            searchResult.forEach((item, index)=>{
                if(item.id === id){
                    searchResult.splice(index, 1)
                }
            }) 
            setSearchResult([...searchResult])
        }
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card">
                            <div className="card-header text-light bg-primary">
                                Contacts
                            </div>
                            
                            <input 
                                type="text"
                                placeholder="Search...."
                                value={searchContact}
                                onChange={handleChange}
                            />
                            
                            <div className="card-body">
                                {searchResult.map(item =>(
                                <div className="col_main">
                                    <div className="contactName">
                                    
                                  <div className="col-mob mb-2 p-2">
                                      
                                  <span className="circle1">
                                   
                                        {(item.contactName.slice(0,1) === 'A') ?
                                        <p id="center" style={{backgroundColor: 'red'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'B') ?
                                        <p id="center" style={{backgroundColor: '#575FCF'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'C') ?
                                        <p id="center" style={{backgroundColor: '#EF5777'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'D') ?
                                        <p id="center" style={{backgroundColor: '#4BCFFA'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'E') ?
                                        <p id="center" style={{backgroundColor: '#34E7E4'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'F') ?
                                        <p id="center" style={{backgroundColor: '#0BE881'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'G') ?
                                        <p id="center" style={{backgroundColor: '#F53B57'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'H') ?
                                        <p id="center" style={{backgroundColor: '#3C40C6'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'I') ?
                                        <p id="center" style={{backgroundColor: '#0FBCF9'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'J') ?
                                        <p id="center" style={{backgroundColor: '#00D8D6'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'K') ?
                                        <p id="center" style={{backgroundColor: '#05C46B'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'L') ?
                                        <p id="center" style={{backgroundColor: '#FFC048'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'M') ?
                                        <p id="center" style={{backgroundColor: '#FFDD59'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'N') ?
                                        <p id="center" style={{backgroundColor: '#FF5E57'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'O') ?
                                        <p id="center" style={{backgroundColor: '#D2DAE2'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'P') ?
                                        <p id="center" style={{backgroundColor: '#FFA801'}}>
                                        {item.contactName.slice(0,1)}</p> 
                                        :
                                        (item.contactName.slice(0,1) === 'Q') ?
                                        <p id="center" style={{backgroundColor: '#FFD32A'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'R') ?
                                        <p id="center" style={{backgroundColor: '#2ecc71'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'S') ?
                                        <p id="center" style={{backgroundColor: '#2980b9'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'T') ?
                                        <p id="center" style={{backgroundColor: '#f39c12'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'U') ?
                                        <p id="center" style={{backgroundColor: '#8e44ad'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'V') ?
                                        <p id="center" style={{backgroundColor: '#34495e'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'X') ?
                                        <p id="center" style={{backgroundColor: '#95a5a6'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'Y') ?
                                        <p id="center" style={{backgroundColor: '#fdcb6e'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        (item.contactName.slice(0,1) === 'Z') ?
                                        <p id="center" style={{backgroundColor: '#fd79a8'}}>
                                        {item.contactName.slice(0,1)}</p>
                                        :
                                        ''}
                                
                                </span>
                                     <span> {item.contactName} </span>
                                     <span>{item.mobile}</span>
                                </div> 
                                 
                                  <span className="remove">
                                  <i class="fas fa-trash" 
                                  onClick={()=> remove(item.id)}
                                  >
                                    </i>
                                  </span>   
                                  </div>
                                </div>
                                
                                ))}
                            </div>

            <div className="card-footer">
                <span className="circle2 btn btn-warning ml-auto">
                                
            <i className="fas fa-plus" 
            data-toggle="modal" data-target="#myModal"></i> 
                                 
                    <div class="modal fade" id="myModal">
                        <div class="modal-dialog modal-sm">
                        <div class="modal-content">
  
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
        
        
            <div class="modal-body">
        
                <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Name" 
                    value={contactName}
                    onChange={handleName}
                />
                </div>

                <div className="form-group">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Mobile" 
                    value={mobile}
                    onChange={handleMob}
                />     
                </div>
                
            </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal"
                 onClick={handleSubmitForm}>Save</button> 

                <button type="button" class="btn btn-danger" 
                data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
            
        </>
    )
}
export default ContactBook