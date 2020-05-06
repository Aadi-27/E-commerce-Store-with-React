import React, { Component } from 'react';
import './product.css';

class SimilarProducts extends Component {
    render() {
        const productItems = this.props.productData.map(item => (
            <div className="card">
                <img src={item.img} alt=""/>
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
