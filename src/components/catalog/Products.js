import React, { Component } from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Sidebar from './Sidebar';

class Products extends Component {
    render() {
        const productItems = this.props.productData.map(product => (
                <div className="product-card" key={product.id} >
                <Link to='/productDetails' >
                    <div className="detail-link" onClick={(e) => this.props.handleDetail(e, product)}>
                        <img src={product.img} alt="Chocolates"
                        
                        />
                        <p >{product.name}</p>
                    </div>
                </Link>
                    <span>${product.price}</span>
                    <button className="cart-btn"
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
        return(
            <section className="homepage">
                <Filters productData={this.props.productData}
                handleChangeSort={this.props.handleChangeSort} sort={this.props.sort} 
                handleChangeFilter={this.props.handleChangeFilter} filter={this.props.filter} />

                <Sidebar />

                <div className="explored-results">
                    {productItems}
                </div>
            </section>
        )
    }
}

export default Products;