import React from 'react'
import './catalog.css';

export const Sidebar = () =>  {
        return (
            <div className="explore-products">
                <h1>Explore</h1>
                <ul>
                    <li>New Collection</li>
                    <li>Our Top Picks</li>
                    <li>Trending</li>
                    <li>Ocassion</li>
                    <li>Gift Categories</li>
                </ul>
            </div>
        )
}

export default Sidebar;
