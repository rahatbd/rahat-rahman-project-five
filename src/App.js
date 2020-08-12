import React, { Component, Fragment } from 'react';
import Display from './Display';
import Form from './Form';
import axios from 'axios';
import './styles/style.css';

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
            console.log(response);
            const countryCollection = ['Global'];
            // check length
            for (let index = 0; index <= 185; index++) {
                countryCollection.push(response.data.Countries[index].Country);
            }
            // console.log(countryCollection);
            this.setState({
                globalCases: response.data.Global,
                countryCases: response.data.Countries,
                countryList: countryCollection,
            })
        })
    }
    getUserSelection = (userChoice) => {
        // event.preventDefault();
        // console.log(userChoice);
        // console.log(this.state.countryCases);
        const selectedCountry = this.state.countryCases.filter(country => {
            return userChoice === country.Country;
        })
        // console.log(selectedCountry);
        // console.log(this.state.userSelection);
        this.setState({
            userSelection: selectedCountry
        })
        // console.log('UserSel:', this.state.userSelection);
    }
    render() {
        return (
        //   <div className="App">
        //   </div>
            <Fragment>
                <header>
                    <h1 className="wrapper">Covid-19 Tracker</h1>
                </header>
                <Display globalData={this.state.globalCases} countryData={this.state.userSelection}/>
                <Form countrySelection={this.state.countryList} getUserSelection={this.getUserSelection}/>
                <footer>
                    <div className="wrapper">
                        <p>Data provided by <a href="https://covid19api.com/">covid 19 api</a></p>
                        <p>Images used from <a href="https://unsplash.com/s/photos/virus">Unsplash</a></p>
                        <p>Created by Rahat Rahman, 2020</p>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default App;