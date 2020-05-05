import React, { Component } from 'react';

class SimilarProducts extends Component {
    render() {
        return (
            <div className="similar-products">
                <div className="similar-products-sub">
                    <h1>Similar Products</h1>
                    <div className="products-sub">
                        <div className="card">
                            <img src={pic1} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }      
}

export default SimilarProducts;
