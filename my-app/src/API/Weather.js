import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
    // Sets temp variable
    const [temp, setTemp] = useState("");

    useEffect(() => {
        axios.get('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=67.28&lon=14.405&altitude=11')
        .then(response => {
            setTemp(response.data.properties.timeseries[2].data.instant.details.air_temperature);
        })
        .catch(err => {
            console.log(err)
        });
    }, [])

    return(
        <div>
            <h1>{temp}</h1>
        </div>
    )
}