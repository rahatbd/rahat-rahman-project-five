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
            userSelection: {},
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
    render() {
        return (
        //   <div className="App">
        //   </div>
            <Fragment>
                <header>
                    <h1 className="wrapper">Covid-19 Tracker</h1>
                </header>

                <section className="wrapper">
                    <Display globalData={this.state.globalCases}/>
                    <Form countrySelection={this.state.countryList}/>
                    {/* <Display globalData={this.state.canadaCases}/> */}
                </section>
            </Fragment>
        )
    }
}

export default App;