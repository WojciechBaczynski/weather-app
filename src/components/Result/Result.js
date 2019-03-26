import React from 'react';
import styles from './Result.module.css';

const result = props => {
    const { err, date, city, sunrise, sunset, temp, pressure, wind } = props.weather;
    let content = null;
    if (!err && city) {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
        content = (
            <React.Fragment>
                <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
                <h4>Dane dla dnia i godziny: {date}</h4>
                <h4>Aktualna temperatura {temp}&#176;C</h4>
                <h4>Wschód słońca dzisiaj {sunriseTime}</h4>
                <h4>Zachód słońca dzisiaj {sunsetTime}</h4>
                <h4>Aktualna siła wiatu {wind}m/s</h4>
                <h4>Aktualne ciśnienie {pressure}hPa</h4>
            </React.Fragment>
        );
    }
    const badData = <h4>Nie mamy w bazie {city}</h4>
    return (
        <div className={styles.Result}>
            {err ? badData : content}
        </div>
    );
};

export default result;