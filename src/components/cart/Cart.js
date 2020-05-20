import React, { Component } from 'react';
import './cart.css';
import cartLogo from '../../logos/cart-white.png';
import { ProductConsumer } from '../../Context';

export class Cart extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => (
                    <div className={`cart-hidden ${value.isCartVisible ? "shopping-cart" : ""}`}>
                        <div className="cart-header">
                            <img src={cartLogo} alt="cart"/>
                            <p>Cart(<span id="cart-total-count">{value.totalCount}</span> items)</p>
                            <span id="close-cart" onClick={(e) => value.toggleCartHide(e)}>X</span>
                        </div>
                        <div className="cart-body">
                            <div className="cart-list-wrapper">
                                <ul className="cart-items">
                                    {value.cartItems.map(product => (
                                        <li key={product._id}>
                                            <div className="cart-item-card">
                                                <div className="left-part">
                                                    <img src={product.img} alt="gift item"/>
                                                    <span>${product.price}</span>
                                                </div>
                                                <div className="right-part">
                                                    <div className="item-info">
                                                        <a href={`#${product._id}`} target="_blank" rel="noopener noreferrer">
                                                            <p className="cart-item-name">{product.name}</p>
                                                        </a>
                                                    </div>
                                                    <div id={product._id} className="cancel-item" onClick={(e) => value.handleRemoveFromCart(e, product)}>
                                                        <span>X</span>
                                                    </div>
                                                    <div className="cart-item-qty">
                                                        <p>Qty :</p>
                                                        <div className="qty-selector">
                                                            <button onClick={(e) => value.countDecrement(e, product)}>-</button>
                                                            <span>{product.count}</span>
                                                            <button onClick={(e) => value.countIncrement(e, product)}>+</button>
                                                        </div>
                                                    </div>
                                                </div> 
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="cart-amount">
                                <p>
                                    Total: <span>${value.totalPrice} /-</span>
                                </p>
                                <button>Proceed To Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        )
    }
}

export default Cart;
