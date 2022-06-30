import React, { useEffect, useState } from 'react'
import axios from 'axios';

function CountryApp(){

    const [countries, setCountries] = useState([]);

    const [search, setSearch] = useState('');

    const [filteredCountries, setFilteredCountries] = useState([])

    const[loading, setLoading] = useState(false);


    useEffect(()=>{
        setLoading(true);
        axios.get("https://restcountries.eu/rest/v2/all")
        .then((res)=>{
            setCountries(res.data)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[])
    console.log(countries)


    useEffect(()=>{
        setFilteredCountries(
            countries.filter((country => 
                country.name.toLowerCase()
                .includes(search.toLowerCase())))
        )
    })

    if(loading){
        return <p>Loading countries.....</p>
    }

    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-10 mx-auto bg-light">
                        <h1 className="text-center">Country List</h1>

                        <div className="form-group mt-3 mb-3 my-input">
                            <input type="text"
                                className="form-control"
                                placeholder="Enter Country...."
                                onChange={(e)=> setSearch(e.target.value)}
                                />
                        </div>

                        <div className="row">
                            {filteredCountries.map((item, index)=>(
                            <div className="col-md-4 mb-3 mt-3">
                            <div class="card">
                                <div className="card-header myheader">
                                    {item.name}
                                </div>
                                <div className="card-body mybody">
                                    <img src={item.flag} className="myImg" />
                                </div>
                                
                                </div>
                            </div>
                            ))}
                        </div>      
                    </div>
                </div>
            </div>            

        </>
    )
}

export default CountryApp