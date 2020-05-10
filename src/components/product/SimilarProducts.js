import React, { Component } from 'react';
import './product.css';

class SimilarProducts extends Component {
    render() {
        const productItems = this.props.productData.map(product => (
            <div className="card" key={product.id}>
                <img src={product.img} alt=""/>
                <p>{product.name}</p>
                <span>${product.price}</span>
                <button className="cart-button"
                // disabled={this.props.inCart ? true : false}
                onClick={(e) => this.props.handleAddToCart(e, product)}>
                <i className="fas fa-cart-plus"></i>
                {/* {this.props.inCart ? (
                    <p className="inCart-text" disabled>In Cart</p>
                ) : (
                    <i className="fas fa-cart-plus"></i>
                )} */}
                </button>
            </div>
        ))
        return (
            <div className="similar-products">
                <div className="similar-products-sub">
                    <h1>Similar Products</h1>
                    <div className="products-sub">
                        {productItems}
                    </div>
                </div>
            </div>
        )
    }      
}

export default SimilarProducts;
