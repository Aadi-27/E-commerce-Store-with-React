import React from 'react'
import './catalog.css';

export const Filters = () => {
        return (
            <div className="filter">
                <h1>New Collection</h1>
                <div>
                    <button>Kids</button>
                    <button>Men</button>
                    <button>Women</button>
                    <button>Filter</button>
                    <button>Sort</button>
                </div>
            </div>
        )
}

export default Filters
