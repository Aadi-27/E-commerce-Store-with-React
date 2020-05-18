import React, { Component } from 'react';
import './product.css';

class SimilarProducts extends Component {
    render() {
        const { productData, selectedProductId } = this.props;
        const productItems = productData.map(product => (
            <div className="card" key={product._id}>
                <img src={product.img} alt=""/>
                <p>{product.name}</p>
                <span>${product.price}</span>
                <button className="cart-button"
                disabled={selectedProductId[product._id] ? true : false}
                onClick={(e) => this.props.handleAddToCart(e, product)}>
                {selectedProductId[product._id] ? (
                    <p className="inCart-text">ADDED</p>
                    ):(
                    <p className="inCart-text">ADD TO CART</p>
                )}
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
