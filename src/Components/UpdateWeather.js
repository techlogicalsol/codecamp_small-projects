import React from 'react'

function UpdateWeather(weatherData){
    return(
        <>

            <div className="container mt-5">
                <div className="row">
                <div className="col-md-8 mx-auto">
                    <div className="card">
                        <div className="card-header">
                            {weatherData.name}
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </>
    )
}

export default UpdateWeather