import React, { Component } from 'react';
import './product.css';
import SimilarProducts from './SimilarProducts';
import { ProductConsumer } from '../../Context';

export class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
            {(value) => (
            <div className="contain">
                <section className="product-details" key={value.productDetail._id}>
                    <div className="img-wrapper">
                        <img className="img-1" src={value.productDetail.img} alt=""/>
                    </div>
                    <div className="contents">
                        <h1>{value.productDetail.name}</h1>
                        
                        <div className="price-details">
                            <div className="shipping">
                                <p><img src={value.productDetail.tick} alt="tick-mark"></img>Free shipping</p>
                            </div>
                            <div className="reviews">
                                <img src={value.productDetail.review} alt="review-stars" />
                                <img src={value.productDetail.review} alt="review-stars" />
                                <img src={value.productDetail.review} alt="review-stars" />
                                <img src={value.productDetail.review} alt="review-stars" />
                                <img src={value.productDetail.review} alt="review-stars" /> 
                                <p>reviews</p>
                            </div>
                        </div>
                        <div className="price">
                            <span className="price-tag">${value.productDetail.price}</span>
                        </div>
                        <div className="delivery">
                            <button className={`${value.selectedProductId[value.productDetail._id] ? "inactive-btn" : "active-btn"}`} 
                            disabled={value.selectedProductId[value.productDetail._id] ? true : false}
                            onClick={(e) => value.handleAddToCart(e, value.productDetail)}>
                            {value.selectedProductId[value.productDetail._id] ? (
                                "ADDED TO CART"
                                ):(
                                "ADD TO CART"
                            )}
                            </button>
                            <button className="active-btn">Buy Now</button>
                        </div>
                        {/* <div className="quantity-selector">
                            <p>Quantity :</p>
                            <div className="quantity-selector-sub">
                                <button onClick={(e) => countDec(e, product)}>-</button>
                                <span>{`${product.counter > 1 ? product.counter : "1"}`}</span>
                                <button onClick={(e) => countInc(e, product)}>+</button>
                            </div>
                        </div> */}
                        <hr />
                        <div className="description">
                            <h1>Description</h1>
                            <p>{value.productDetail.description}</p>
                        </div>
                        <div className="specifications">
                            <h1>Key Attributes</h1>
                            <div className="specifications-sub">
                                <p className="type">Type :</p>
                                <p className="type-detail">{value.productDetail.type}</p>
                            </div>
                            <div className="specifications-sub">
                                <p className="brand">Brand :</p>
                                <p className="brand-detail">{value.productDetail.brand}</p>
                            </div>
                            <div className="specifications-sub">
                                <p className="weight">Weight :</p>
                                <p className="weight-detail">{value.productDetail.weight} gms</p>
                            </div>
                            <div className="specifications-sub">
                                <p className="ingredients">Contents :</p>
                                <p className="ingredient-detail">{value.productDetail.contents}</p>
                            </div>
                        </div>
                        <div className="product-speciality">
                            <h1>This makes a Perfect Fit for :</h1>
                            <ul>
                                <li>{value.productDetail.speciality1}</li>
                                <li>{value.productDetail.speciality2}</li>
                                <li>{value.productDetail.speciality3}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <SimilarProducts />
            </div>
            )}
            </ProductConsumer>
        )
    }
}

export default ProductDetails
