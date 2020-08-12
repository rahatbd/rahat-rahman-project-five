import React from 'react';

const Display = (props) => {
    // console.log('props', props);
    for (let prop in props.globalData) {
        props.globalData[prop] = props.globalData[prop].toLocaleString();
    }
    return (
        <section className="wrapper">
            {
                props.countryData.length === 0
                    ? <div className="cases">
                        <h2>Global Cases</h2>
                        <p className="confirm">New Confirmed: <span>{props.globalData.NewConfirmed}</span></p>
                        <p className="death">New Deaths: <span>{props.globalData.NewDeaths}</span></p>
                        <p className="recover">New Recovered: <span>{props.globalData.NewRecovered}</span></p>
                        <p className="confirm">Total Confirmed: <span>{props.globalData.TotalConfirmed}</span></p>
                        <p className="death">Total Deaths: <span>{props.globalData.TotalDeaths}</span></p>
                        <p className="recover">Total Recovered: <span>{props.globalData.TotalRecovered}</span></p>
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