import React, { useState } from 'react';
import "./Country.css"


const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    // console.log(country.flags.flags.png)

    const [visited, setVisited]=useState(false);

    const handleVisited =()=>{
        // basic system
        // setVisited(visited? false: true)

        // second system
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        // third system:
        setVisited(!visited)
        handleVisitedCountries(country)
        


        // setVisited(true)
    }
    return (
        <div className={`country ${visited&& 'country-visited'}`}>

            <img src={country.flags.flags.png} alt={country.flags.flags.png} />

            <h3>Name: {country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area >300000?"Big Country": 'Small Country'}</p>
            <button onClick={handleVisited}>{visited? 'Visited':'Not Visited'}</button>
            <button onClick={()=>{handleVisitedFlags(country.flags.flags.png)}}>Add visited flag</button>

        </div>
    );
};

export default Country;




/**
 * 1.  Inline css
 * 2.
 */