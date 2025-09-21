import React, { use, useState } from 'react';
import Country from '../Country/Country.jsx';
import "./Countries.css"

const Countries = ({ countriesPromise }) => {

    const [VisitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlag]= useState([])
    // console.log(visitedFlags)
    const handleVisitedCountries = (country) => {
        console.log("clicked", country)
        const newVisitedCountries = [...VisitedCountries, country]
       setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags =(flag)=>{
        // console.log("handled visited flag",)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlag(newVisitedFlags)
    }


    const countriesData = use(countriesPromise);

    const countries = countriesData.countries;
    // console.log(countries);
    return (
        <div >
            <h1>In The Countries: {countries.length}</h1>
            <h3>Total Country Visited:{VisitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>

            <div className='visited-flag-container '>
                {
                    visitedFlags.map((flag, index)=><img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    VisitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}  ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;