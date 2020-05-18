import React, { Component } from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Sidebar from './Sidebar';

class Products extends Component {
    render() {
        const {selectedProductId, handleAddToCart, handleDetail} = this.props;
        const productItems = this.props.productData.map(product => (
                <div className="product-card" key={product._id} >
                <Link to='/productDetails' >
                    <div className="detail-link" onClick={(e) => handleDetail(e, product)}>
                        <img src={product.img} alt="Chocolates"/>
                        <p>{product.name}</p>
                    </div>
                </Link>
                    <span>${product.price}</span>
                    <button className="cart-btn"
                    disabled={selectedProductId[product._id] ? true : false}
                    onClick={(e) => handleAddToCart(e, product)}>
                    {selectedProductId[product._id] ? (
                        <p className="inCart-text">ADDED</p>
                        ):(
                        <p className="inCart-text">ADD TO CART</p>
                        // <i className="fas fa-cart-plus"></i>
                    )}
                    </button>
                </div>
        ))
        return(
            <section className="homepage">
            <div className="main-view">
                <Filters productData={this.props.productData}
                handleChangeSort={this.props.handleChangeSort} sort={this.props.sort} 
                handleChangeFilter={this.props.handleChangeFilter} filter={this.props.filter} />

                <div className="explored-results">
                    {productItems}
                </div>
            </div>
                <Sidebar />
            </section>
        )
    }
}

export default Products;