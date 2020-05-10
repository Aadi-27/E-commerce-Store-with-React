import React, { Component } from 'react';
import './cart.css';
import cartLogo from '../../logos/cart-white.png';

export class Cart extends Component {
    render() {
        const isCartVisible = this.props.isCartVisible;
        const cartItem = this.props.cartItems;
        const renderItems = cartItem.map(item => (
            <li key={item.id}>
                <div className="cart-item-card">
                    <div className="left-part">
                        <img src={item.img} alt="gift item"/>
                        <span>{item.price}</span>
                    </div>
                    <div className="right-part">
                        <div className="item-info">
                            <a href={`#${item.id}`} target="_blank" rel="noopener noreferrer">
                                <p className="cart-item-name">{item.name}</p>
                            </a>
                        </div>
                        <div id={item.id} className="cancel-item" onClick={(e) => this.props.handleRemoveFromCart(e, item)}>
                            <span>X</span>
                        </div>
                        <div className="cart-item-qty">
                            <p>Qty :</p>
                            <div className="qty-selector">
                                <button>+</button>
                                <span>1</span>
                                <button>-</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </li>
        ))
        return (
            <div className={`cart-hidden ${isCartVisible ? "shopping-cart" : ""}`}>
                <div className="cart-header">
                    <img src={cartLogo} alt="cart"/>
                    <p>Cart(<span id="cart-total-count">{cartItem.length}</span> items)</p>
                    <span id="close-cart" onClick={(e) => this.props.toggleCartHide(e)}>X</span>
                </div>
                <div className="cart-body">
                    <div className="cart-list-wrapper">
                        <ul className="cart-items">
                            {renderItems}
                        </ul>
                    </div>
                    <div className="cart-amount">
                        <p>
                            Total : <span>$13.69</span>/-
                        </p>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
