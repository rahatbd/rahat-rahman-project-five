import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            userSelection: ""
        }
    }
    handleChange = event => {
        this.setState({
            userSelection: event.target.value
        })
    }
    render() {
        return (
            <form onClick={() => this.props.userSelection(this.state.userSelection)} className="wrapper">
                <label htmlFor="country">Select a country to view cases:</label>
                <select onChange={this.handleChange} name="country" id="country">
                    {
                        this.props.countrySelection.map((value, index) => {
                            return <option key={index} value={value}>{value}</option>
                        })
                    }
                </select>
            </form>
        )
    }
}
 
export default Form;