import React, {Component} from 'react';
import logo from '../../logos/mainlogo1.jpg';
import cart from '../../logos/cart-black.png';
import profile from '../../logos/profile.jpg';
import { ProductConsumer } from '../../Context';
import './header.css';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => (
                    <header className="menu">
                        <div className="site-logo">
                            <img src = {logo} alt='App Logo'/>
                        </div>
                        <label>
                            <input type="text" placeholder="Search.." className="input-items" />
                        </label>
                        <div className="cart"  onClick={(e) => value.toggleCartShow(e)}>
                            <img src={cart} alt="Shopping Cart" />
                            <span><NavLink to='/cart'></NavLink>Cart:</span>
                            <span>{value.totalCount}</span>
                        </div>
                        <div className="user-profile">
                            <img src={profile} alt="Profile" />
                            <span>Hello, <b>Mr. Aditya Raj</b>
                            </span>
                            <div className="profile-menu">
                                <ul>
                                    <li><NavLink to='/'>Home</NavLink></li>
                                    <li>Your Orders</li>
                                    <li>Settings</li>
                                    <li>Sign Out</li>
                                </ul>
                            </div>
                        </div>
                    </header>
                )}
            </ProductConsumer>
        )
    }
}

export default Menu;