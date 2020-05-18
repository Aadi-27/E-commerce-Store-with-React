import React, { Component } from 'react'
import './catalog.css';

export class Filters extends Component {
    render() {
        return (
            <div className="filter">
                <h1>New Collection</h1>
                <div className="change">
                    <div className="label">
                        <label>Filter: </label>
                    </div>
                    <div className="select-prop">
                        <select value={this.props.filter} onChange={this.props.handleChangeFilter} id="select-prop-1">
                            <option value="">All</option>
                            <option value="kids">Kids</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>  
                </div>
                <div className="change">
                    <div className="label">
                        <label>Sort by Price: </label>
                    </div>
                    <div className="select-prop" id="slt-2">
                        <select value={this.props.sort} onChange={this.props.handleChangeSort} id="select-prop-2">
                            <option value="">select</option>
                            <option value="lowest">Lowest to Highest</option>
                            <option value="highest">Highest to Lowest</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }   
}

export default Filters
