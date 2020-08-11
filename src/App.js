import React, { Component } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            globalCases: {},
            canadaCases: {},
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://api.covid19api.com/summary',
            dataResponse: 'json',
        }).then(response => {
            console.log(response);
            console.log(response.data.Global);
            console.log(response.data.Countries[30]);
            // const casesArray = [];
            // for (let prop in response.data.Global) {
            //     casesArray.push(response.data.Global[prop]);
            // }
            // console.log(casesArray);
            const globalData = response.data.Global;
            const canadaData = response.data.Countries[30];
            for (let prop in globalData) {
                globalData[prop] = globalData[prop].toLocaleString();
            }
            for (let prop in canadaData) {
                canadaData[prop] = canadaData[prop].toLocaleString();
            }
            this.setState({
                globalCases: globalData,
                canadaCases: canadaData,
            })
        })
    }
    render() {
        return (
        //   <div className="App">
        //   </div>
            <div>
                {/* check header wrapper */}
                <h1>Covid-19 Tracker</h1>
                <section className="wrapper">
                    <div className="global">
                        <h2>Global Cases</h2>
                        <p>New Confirmed: <span>{this.state.globalCases.NewConfirmed}</span></p>
                        <p>New Deaths: <span>{this.state.globalCases.NewDeaths}</span></p>
                        <p>New Recovered: <span>{this.state.globalCases.NewRecovered}</span></p>
                        <p>Total Confirmed: <span>{this.state.globalCases.TotalConfirmed}</span></p>
                        <p>Total Deaths: <span>{this.state.globalCases.TotalDeaths}</span></p>
                        <p>Total Recovered: <span>{this.state.globalCases.TotalRecovered}</span></p>
                    </div>
                    <div className="canada">
                        <h2>Canadian Cases</h2>
                        <p>New Confirmed: <span>{this.state.canadaCases.NewConfirmed}</span></p>
                        <p>New Deaths: <span>{this.state.canadaCases.NewDeaths}</span></p>
                        <p>New Recovered: <span>{this.state.canadaCases.NewRecovered}</span></p>
                        <p>Total Confirmed: <span>{this.state.canadaCases.TotalConfirmed}</span></p>
                        <p>Total Deaths: <span>{this.state.canadaCases.TotalDeaths}</span></p>
                        <p>Total Recovered: <span>{this.state.canadaCases.TotalRecovered}</span></p>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;