import React, { Component } from 'react';
import './cart.css';
import cartLogo from '../../logos/cart-white.png';

export class Cart extends Component {
    render() {
        console.log(this.props.productData);
        return (
            <div className="shopping-cart">
                <div className="cart-header">
                    <img src={cartLogo} alt="cart"/>
                    <p>Cart(<span id="cart-total-count">1</span> items)</p>
                    <span id="close-cart">X</span>
                </div>
                <div className="cart-body">
                    <div className="cart-list-wrapper">
                        <ul className="cart-items">
                            <li>
                                <div className="cart-item-card">
                                    <div className="left-part">
                                        <img src={this.props.productData.img} alt="gift item"/>
                                        <span>$4.99</span>
                                    </div>
                                    <div className="right-part">
                                        <div className="item-info">
                                            <a href={`#${this.props.productData.id}`} target="_blank">
                                                <p className="cart-item-name">Dark Chocolate with Hazlenuts</p>
                                            </a>
                                        </div>
                                        <span id="cancel-item">X</span>
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
                            {/* <li>
                                <div className="cart-item-card">
                                    <div className="left-part">
                                        <img src={itemImg} alt="gift item"/>
                                        <span>$4.99</span>
                                    </div>
                                    <div className="right-part">
                                        <div className="item-info">
                                            <a href="#" target="_blank">
                                                <p className="cart-item-name">Dark Chocolate with Hazlenuts</p>
                                            </a>
                                        </div>
                                        <span id="cancel-item">X</span>
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
                            <li>
                                <div className="cart-item-card">
                                    <div className="left-part">
                                        <img src={itemImg} alt="gift item"/>
                                        <span>$4.99</span>
                                    </div>
                                    <div className="right-part">
                                        <div className="item-info">
                                            <a href="#" target="_blank">
                                                <p className="cart-item-name">Dark Chocolate with Hazlenuts</p>
                                            </a>
                                        </div>
                                        <span id="cancel-item">X</span>
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
                            <li>
                                <div className="cart-item-card">
                                    <div className="left-part">
                                        <img src={itemImg} alt=""/>
                                        <span>$4.99</span>
                                    </div>
                                    <div className="right-part">
                                        <div className="item-info">
                                            <a href="#" target="_blank">
                                                <p className="cart-item-name">Dark Chocolate with Hazlenuts</p>
                                            </a>
                                        </div>
                                        <span id="cancel-item">X</span>
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
                            <li>
                                <div className="cart-item-card">
                                    <div className="left-part">
                                        <img src={itemImg} alt=""/>
                                        <span>$4.99</span>
                                    </div>
                                    <div className="right-part">
                                        <div className="item-info">
                                            <a href="#" target="_blank">
                                                <p className="cart-item-name">Dark Chocolate with Hazlenuts</p>
                                            </a>
                                        </div>
                                        <span id="cancel-item">X</span>
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
                            </li> */}
                        </ul>
                    </div>
                    <div className="cart-amount">
                        <p>
                            Total : <span>$13.69</span>/-
                        </p>
                        <a>Proceed To Checkout</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;
