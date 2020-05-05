import React, { Component } from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Sidebar from './Sidebar';

class Products extends Component {
    render() {
        const productItems = this.props.productData.map(product => (
            <Link to='/productDetails'>
                <div className="product-card" key={product.id}>
                    <img src={product.img} alt="Chocolates" />
                    <p>{product.name}</p>
                    <span>${product.price}</span>
                </div>
            </Link>
        ))
        return(
            <section className="homepage">
                <Filters />
                <Sidebar />
                <div className="explored-results">
                    {productItems}
                </div>
            </section>
        )
    }
}

export default Products;