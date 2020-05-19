import React from 'react'
import './catalog.css';
import { Link } from 'react-router-dom';

export const Sidebar = () =>  {
        return (
            <div className="explore-products">
                <h1>Explore</h1>
                <ul className="explore-options">
                    <li><Link to='/new-collection'>New Collection</Link></li>
                    <li><Link to='/our-top-picks'>Our Top Picks</Link></li>
                    <li><Link to='/trending'>Trending</Link></li>
                    <li><Link to='/ocassion'>Ocassion</Link></li>
                    <li><Link to='gift-categories'>Gift Categories</Link></li>
                </ul>
            </div>
        )
}

export default Sidebar;
