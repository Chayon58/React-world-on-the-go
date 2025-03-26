import React from 'react';

const country = (country) => {
    console.log(country);
    return (
        <div>
            <h3>Name: {country.name.common} </h3>
        </div>
    );
};

export default country;