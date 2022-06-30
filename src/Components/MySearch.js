import React, { useEffect, useState } from 'react'
import people from '../Shared/SearchInfo';

function MySearch(){

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(people);

    const handleChange = event =>{
        setSearchTerm(event.target.value)
    }


    useEffect(()=>{
        const result = people.filter(person => person.name.toLowerCase().includes(searchTerm)
        );
        setSearchResult(result)
    }, [searchTerm])


    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">

                        <input 
                            type="text"
                            className="form-control"
                            placeholder="Search......."
                            value={searchTerm}
                            onChange={handleChange}
                            />

                            <ul>
                                {searchResult.map(item =>(
                                <li>{item.name}</li>
                                ))}
                            </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default MySearch