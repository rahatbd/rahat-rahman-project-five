import React from 'react';

const Display = props => {
    for (let prop in props.globalData) {
        props.globalData[prop] = props.globalData[prop].toLocaleString();
    }

    const { NewConfirmed, NewDeaths, NewRecovered, TotalConfirmed, TotalDeaths, TotalRecovered } = props.globalData;

    return (
        <section className="wrapper">
            {
                props.countryData.length === 0
                    ? <div className="cases">
                        <h2>Global Cases</h2>
                        <p className="confirm">New Confirmed: <span>{NewConfirmed}</span></p>
                        <p className="death">New Deaths: <span>{NewDeaths}</span></p>
                        <p className="recover">New Recovered: <span>{NewRecovered}</span></p>
                        <p className="confirm">Total Confirmed: <span>{TotalConfirmed}</span></p>
                        <p className="death">Total Deaths: <span>{TotalDeaths}</span></p>
                        <p className="recover">Total Recovered: <span>{TotalRecovered}</span></p>
                      </div>
                    : <div className="cases">
                        <h2>{props.countryData[0].Country} Cases</h2>
                        <p className="confirm">New Confirmed: <span>{props.countryData[0].NewConfirmed.toLocaleString()}</span></p>
                        <p className="death">New Deaths: <span>{props.countryData[0].NewDeaths.toLocaleString()}</span></p>
                        <p className="recover">New Recovered: <span>{props.countryData[0].NewRecovered.toLocaleString()}</span></p>
                        <p className="confirm">Total Confirmed: <span>{props.countryData[0].TotalConfirmed.toLocaleString()}</span></p>
                        <p className="death">Total Deaths: <span>{props.countryData[0].TotalDeaths.toLocaleString()}</span></p>
                        <p className="recover">Total Recovered: <span>{props.countryData[0].TotalRecovered.toLocaleString()}</span></p>
                      </div>
            }
        </section>
    )
}

export default Display;