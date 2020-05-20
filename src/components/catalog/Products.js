import React, { Component } from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Sidebar from './Sidebar';
import { ProductConsumer } from '../../Context';

class Products extends Component {
    render() {
        return(
            <ProductConsumer>
                {(value) => (
                    value.isLoading ? 'Loading...' : 
                    (<section className="homepage">
                    <div className="main-view">
                        <Filters productData={value.productData}
                        handleChangeSort={value.handleChangeSort} sort={value.sort} 
                        handleChangeFilter={value.handleChangeFilter} filter={value.filter} />

                        <div className="explored-results">
                            {value.productData.map(product => (
                                <div className="product-card" key={product._id} >
                                <Link to='/productDetails' >
                                    <div className="detail-link" onClick={(e) => value.handleDetail(e, product)}>
                                        <img src={product.img} alt="Chocolates"/>
                                        <p>{product.name}</p>
                                    </div>
                                </Link>
                                    <span>${product.price}</span>
                                    <button className="cart-btn"
                                    disabled={value.selectedProductId[product._id] ? true : false}
                                    onClick={(e) => value.handleAddToCart(e, product)}>
                                    {value.selectedProductId[product._id] ? (
                                        <p className="inCart-text">ADDED</p>
                                        ):(
                                        <p className="inCart-text">ADD TO CART</p>
                                        // <i className="fas fa-cart-plus"></i>
                                    )}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                        <Sidebar />
                    </section>
                ))}
            </ProductConsumer>
        )
    }
}

export default Products;