import React, { use } from 'react';

const countries = (countriesPromise) => {

    const countries = use(countriesPromise); 
    console.log(countries);
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            {
                countries.map(country => <Country></Country>)
            }
        </div>
    );
};

export default countries;