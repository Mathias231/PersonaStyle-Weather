import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Weather() {
    // Sets temp variable
    const [temp, setTemp] = useState("");

    useEffect(() => {
        axios.get('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=67.28&lon=14.405&altitude=11')
        .then(response => {
            // Sets temp to current 
            setTemp(response.data.properties.timeseries[2].data.instant.details.air_temperature);
        })
        .catch(err => {
            console.log(err)
        });
    }, [])

    return(
        <div class="message-window">
            <div class="message-area">
                <div class="content">
                    <div class="arrow-white">
                    </div>
                    <div class="arrow-black">
                    </div>

                    <div class="background-white">
                    </div>
                    <div class="background-black">
                    </div>
                    <div class="text-area">
                        <div>{temp}</div>
                        <div>モルモット君？</div>
                    </div>
                </div>
            </div>
        </div>
    )
}