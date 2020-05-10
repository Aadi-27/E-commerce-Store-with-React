import React, {Component} from 'react';
import logo from '../../logos/gifts1.png';
import cart from '../../logos/cart-black.png';
import profile from '../../logos/profile.jpg';
import './header.css';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <header className="menu">
                <div className="site-logo">
                    <img src = {logo} alt='App Logo'/>
                    <h2>Memento</h2>
                </div>
                <label>
                    <input type="text" placeholder="Search for gift-items" className="input-items" />
                </label>
                <div className="cart"  onClick={(e) => this.props.toggleCartShow(e)}>
                    <img src={cart} alt="Shopping Cart" />
                    <span><NavLink to='/cart'></NavLink>Cart:</span>
                    <span>{this.props.cartItems.length}</span>
                </div>
                <div className="user-profile">
                    <img src={profile} alt="Profile" />
                    <span>Hello, <b>Mr. Aditya Raj</b>
                    </span>
                    <div className="profile-menu">
                        <ul>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li>Products Category</li>
                            <li>Your Orders</li>
                            <li>Settings</li>
                            <li>Sign Out</li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}

export default Menu;