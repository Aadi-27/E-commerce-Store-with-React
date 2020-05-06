import React, { Component } from 'react'
import './catalog.css';

export class Filters extends Component {
    render() {
        return (
            <div className="filter">
                <h1>New Collection</h1>
                <div className="changeGender">
                    <label>Filter:</label>
                    <select value={this.props.filter} onChange={this.props.handleChangeFilter}>
                        <option value="">All</option>
                        <option value="kids">Kids</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="changeOrder">
                    <label>Sort by Price:</label>
                    <select value={this.props.sort} onChange={this.props.handleChangeSort}>
                        <option value="">select</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>
                </div>
            </div>
        )
    }   
}

export default Filters
