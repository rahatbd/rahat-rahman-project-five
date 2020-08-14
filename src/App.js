import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Display from './Display';
import Form from './Form';
import './style.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            globalCases: {},
            countryCases: [],
            countryList: [],
            userSelection: [],
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://api.covid19api.com/summary',
            dataResponse: 'json',
        }).then(response => {
            // const dd = response.data.Countries[13].Date;
            // const ddd = new Date(Date.parse(dd));
            // console.log(dd);
            // console.log(Date.parse(dd));
            // console.log(ddd);
            // // console.log(ddd.toLocaleString('en-CA'));
            // // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
            // const options = {month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', timeZoneName: 'short'};
            // const updatedDateTime = (new Date(Date.parse((response.data.Countries[13].Date)))).toLocaleString('en-CA', options);
            // console.log(updatedDateTime);

            console.log(response);
            const countryCollection = ['Global'];
            for (let index = 0; index < response.data.Countries.length; index++) {
                countryCollection.push(response.data.Countries[index].Country);
            }
            this.setState({
                globalCases: response.data.Global,
                countryCases: response.data.Countries,
                countryList: countryCollection,
            })
        })
    }
    getUserSelection = userChoice => {
        const selectedCountry = this.state.countryCases.filter(country => {
            return userChoice === country.Country;
        })
        this.setState({
            userSelection: selectedCountry
        })
    }
    render() {
        // let dates;
        // if (this.state.userSelection.length !== 0) {
        //     console.log('header', this.state.userSelection[0].Date);
        //     dates = this.state.userSelection[0].Date;
        // }

        return (
            <Fragment>
                <header>
                    <h1 className="wrapper">Covid-19 Tracker</h1>
                </header>

                <Display globalData={this.state.globalCases} countryData={this.state.userSelection}/>
                <Form countrySelection={this.state.countryList} userSelection={this.getUserSelection}/>

                <footer>
                    <div className="wrapper">
                        <p>Data provided by <a href="https://covid19api.com/" target="_blank" rel="noopener noreferrer">covid 19 api</a>. Created by Rahat Rahman, 2020.</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default App;