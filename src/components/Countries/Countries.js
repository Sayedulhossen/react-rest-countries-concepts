import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries ] = useState([]);
    useEffect( () => {
        fetch('https://restcountries.com/v2/all')
        .then( res => res.json())
        .then( data => setCountries(data))
    } ,[]);
    return (
        <div>
            <h1>All Countries around the world</h1>
          <div className="countries-container">
          <h4>Countries Available: {countries.length}</h4>
            {
                countries.map( country=> <Country country={country}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;