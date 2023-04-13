import React, { useState } from 'react';
import Axios from 'axios';
import Button from 'muicss/lib/react/button';
import Container from 'muicss/lib/react/container';
import Textarea from 'muicss/lib/react/textarea';
import Appbar from 'muicss/lib/react/appbar';

const KEY = "141c90ca94a5c5739f37e6a445a5b6d6";


const Weather = () => {
    const [city,setCity] = useState("")
    const [data,setdata] = useState("")
    const fetchData = async () => {
        try {
            const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`);
        setdata(response.data);
        }
        catch(err){
            alert("Enter the city name")
        }
    }

    return (
        
        <div className="mui--text-center">
            <Appbar><h1>Weather</h1></Appbar> 
            <Textarea type='text' value={city} onChange={e => setCity(e.target.value)} placeholder='Enter the city'/>
        <Button onClick={fetchData} color="primary">Search</Button>  
        <div>
            {data && (
                <Container>
                    <h1>{data.name}, {data.sys.country}</h1>
                    <div>{Math.round(data.main.temp)} C</div>
                    <div>
                        <div>LATITUDE - {data.coord.lat}</div>
                        <div>LONGITUDE - {data.coord.lon}</div>
                    </div>
                </Container>
            )}
        </div>

        </div>
    )
}

export default Weather;