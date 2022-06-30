import React from 'react'

function FormWeather({getWeather,city, country, handleCountry, handleCity}){
    return(
        <>

            <form onSubmit={getWeather}>
                <div className="form-group">
                <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                name="city"
                // value={city}
                // onChange={handleCity}
                />
                </div>

                <div className="form-group">
                <input
                type="text"
                className="form-control"
                placeholder="Enter Country"
                name="country"
                // value={country}
                // onChange={handleCountry}
                />
                </div>
                <button className="btn btn-primary mb-5">Submit</button>
                


            </form>


        </>
    )
}

export default FormWeather