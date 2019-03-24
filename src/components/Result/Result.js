import React from 'react';

const result = props => {
    const { err, city, temp } = props.weather;
    return (
        <React.Fragment>
            <p>{String(err)}</p>
            <p>Miasto: {city}</p>
            <p>Temperatura: {temp}</p>
        </React.Fragment>
    );
};

export default result;