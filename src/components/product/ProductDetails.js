import React, { Component } from 'react';
import './product.css';
import SimilarProducts from './SimilarProducts';

export class ProductDetails extends Component {
    render() {
        const {id, img, name, description, price, type, brand, weight, contents, speciality1, speciality2, speciality3, review, tick} = this.props.productDetail
        const product = this.props.productDetail;
        return (
            <div className="contain">
                <section className="product-details" key={id}>
                    <div className="img-wrapper">
                        <img className="img-1" src={img} alt=""/>
                    </div>
                    <div className="contents">
                        <h1>{name}</h1>
                        
                        <div className="price-details">
                            <div className="shipping">
                                <p><img src={tick} alt="tick-mark"></img>Free shipping</p>
                            </div>
                            <div className="reviews">
                                <img src={review} alt="review-stars" />
                                <img src={review} alt="review-stars" />
                                <img src={review} alt="review-stars" />
                                <img src={review} alt="review-stars" />
                                <img src={review} alt="review-stars" /> 
                                <p>reviews</p>
                            </div>
                        </div>
                        <div className="price">
                            <span className="price-tag">${price}</span>
                        </div>
                        <div className="delivery">
                            <button className="add" onClick={(e) => this.props.handleAddToCart(e, product)}>Add To Cart</button>
                            <button className="buy">Buy Now</button>
                        </div>
                        <div className="quantity-selector">
                            <p>Quantity :</p>
                            <div className="quantity-selector-sub">
                                <button>+</button>
                                <span>1</span>
                                <button>-</button>
                            </div>
                        </div>
                        <hr />
                        <div className="description">
                            <h1>Description</h1>
                            <p>{description}</p>
                        </div>
                        <div className="specifications">
                            <h1>Key Attributes</h1>
                            <div className="specifications-sub">
                                <p className="type">Type :</p>
                                <p className="type-detail">{type}</p>
                            </div>
                            <div className="specifications-sub">
                                <p className="brand">Brand :</p>
                                <p className="brand-detail">{brand}</p>
                            </div>
                            <div className="specifications-sub">
                                <p className="weight">Weight :</p>
                                <p className="weight-detail">{weight} gms</p>
                            </div>
                            <div className="specifications-sub">
                                <p className="ingredients">Contents :</p>
                                <p className="ingredient-detail">{contents}</p>
                            </div>
                        </div>
                        <div className="product-speciality">
                            <h1>This makes a Perfect Fit for :</h1>
                            <ul>
                                <li>{speciality1}</li>
                                <li>{speciality2}</li>
                                <li>{speciality3}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <SimilarProducts productData={this.props.productData} handleAddToCart={this.props.handleAddToCart}/>
            </div>
            
        )
    }
}

export default ProductDetails
