import React, { Component } from 'react';
import './cart.css';
import cartLogo from '../../logos/cart-white.png';

export class Cart extends Component {
    render() {
        const isCartVisible = this.props.isCartVisible;
        const { cartItems, handleRemoveFromCart, countIncrement, countDecrement, total } = this.props;
        const renderItems = cartItems.map(product => (
            <li key={product.id}>
                <div className="cart-item-card">
                    <div className="left-part">
                        <img src={product.img} alt="gift item"/>
                        <span>${product.price}</span>
                    </div>
                    <div className="right-part">
                        <div className="item-info">
                            <a href={`#${product.id}`} target="_blank" rel="noopener noreferrer">
                                <p className="cart-item-name">{product.name}</p>
                            </a>
                        </div>
                        <div id={product.id} className="cancel-item" onClick={(e) => handleRemoveFromCart(e, product)}>
                            <span>X</span>
                        </div>
                        <div className="cart-item-qty">
                            <p>Qty :</p>
                            <div className="qty-selector">
                                <button onClick={(e) => countDecrement(e, product)}>-</button>
                                <span>{product.count}</span>
                                <button onClick={(e) => countIncrement(e, product)}>+</button>
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
                    <p>Cart(<span id="cart-total-count">{cartItems.length}</span> items)</p>
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
                            Total: <span>${total} /-</span>
                        </p>
                        <button>Proceed To Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
