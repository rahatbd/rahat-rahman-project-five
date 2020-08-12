import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form>
                <label htmlFor="country">Select a country to view cases: </label>
                <select name="country" id="country">
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