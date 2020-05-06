import React, { Component } from 'react';
import './catalog.css';
import { Link } from 'react-router-dom';
import Filters from './Filters';
import Sidebar from './Sidebar';

class Products extends Component {
    render() {
        const productItems = this.props.productData.map(product => (
            
                <div className="product-card" key={product.id}>
                <Link to='/productDetails'>
                    <img src={product.img} alt="Chocolates" />
                    <p>{product.name}</p>
                </Link>
                    <div className="buy-product">
                        <span>${product.price}</span>
                        <button>Add to Cart</button>
                    </div>
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