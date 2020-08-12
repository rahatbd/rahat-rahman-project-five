import React from 'react';

const Display = (props) => {
    // console.log(props);
    for (let prop in props.globalData) {
        props.globalData[prop] = props.globalData[prop].toLocaleString();
    }
    return (
        <div className="global">
            <h2>Global Cases</h2>
            <p className="confirm">New Confirmed: <span>{props.globalData.NewConfirmed}</span></p>
            <p className="death">New Deaths: <span>{props.globalData.NewDeaths}</span></p>
            <p className="recover">New Recovered: <span>{props.globalData.NewRecovered}</span></p>
            <p className="confirm">Total Confirmed: <span>{props.globalData.TotalConfirmed}</span></p>
            <p className="death">Total Deaths: <span>{props.globalData.TotalDeaths}</span></p>
            <p className="recover">Total Recovered: <span>{props.globalData.TotalRecovered}</span></p>
        </div>
    )
}

export default Display;