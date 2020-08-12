import React, { Component, Fragment } from 'react';
import Display from './Display';
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

            const obj = response.data.Countries.filter(item => {
                // console.log(item);
                return item.Country === 'Brazil';
            });
            console.log(obj);

            const globalData = response.data.Global;
            const canadaData = response.data.Countries[30];
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
            <Fragment>
                <header>
                    <h1 className="wrapper">Covid-19 Tracker</h1>
                </header>

                <section className="wrapper">
                    <Display globalData={this.state.globalCases}/>
                    <Display globalData={this.state.canadaCases}/>
                </section>
            </Fragment>
        )
    }
}

export default App;