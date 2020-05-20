import React, { Component } from 'react';
import './product.css';
import { ProductConsumer } from '../../Context';
import { Link } from 'react-router-dom';

class SimilarProducts extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => (
                    <div className="similar-products">
                        <div className="similar-products-sub">
                            <h1>Similar Products</h1>
                            <div className="products-sub">
                                {value.productData.map(product => (
                                    <div className="card" key={product._id} onClick={(e) => value.handleDetail(e, product)}>
                                        <Link to='/productDetails'>
                                            <img src={product.img} alt=""/>
                                        </Link>
                                        <p>{product.name}</p>
                                        <span>${product.price}</span>
                                        <button className="cart-button"
                                        disabled={value.selectedProductId[product._id] ? true : false}
                                        onClick={(e) => value.handleAddToCart(e, product)}>
                                        {value.selectedProductId[product._id] ? (
                                            <p className="inCart-text">ADDED</p>
                                            ):(
                                            <p className="inCart-text">ADD TO CART</p>
                                        )}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        )
    }      
}

export default SimilarProducts;
