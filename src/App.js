import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Menu from './components/header/Menu';
import Products from './components/catalog/Products';
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/cart/Cart';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: [],
            filteredProducts: [],
            productDetail: [],
            cartItems: [],
            isCartVisible: false,
            selectedProductId: [],
            totalCount: 0,
            totalPrice: 0
        };
        // this.handleDetail = this.handleDetail.bind(this);
        // this.handleAddToCart = this.handleAddToCart.bind(this);
        // this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        // this.countIncrement = this.countIncrement.bind(this);
        // this.countDecrement = this.countDecrement.bind(this);
        // this.toggleCartShow = this.toggleCartShow.bind(this);
        // this.toggleCartHide = this.toggleCartHide.bind(this);
        // this.handleChangeFilter = this.handleChangeFilter.bind(this);
        // this.handleChangeSort = this.handleChangeSort.bind(this);
    }

    componentDidMount() {
        axios
            .get('http://localhost:4000/')
            .then((res) => {
                this.setState({
                    productData: res.data,
                    filteredProducts: res.data
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    handleDetail = (e, product) => {
        product.counter = 1;
        this.setState({ productDetail: product});
    };

    handleAddToCart = (e, product) => {
        const { selectedProductId } = this.state;
        this.addItems(e, product);
        this.setState({
            selectedProductId: { ...selectedProductId, [product._id]: true },
        });
    };

    addItems(e, product) {
        let productInCart = false;
        this.setState(
            (state) => {
                state.cartItems.forEach((item) => {
                    if (item._id === product._id) {
                        productInCart = true;
                    }
                });
                if (!productInCart) {
                    state.cartItems.push({ ...product, count: 1 });
                }
            },
            () => {
                this.addProdValues(e);
            }
        );
    }

    addProdValues(e) {
        let totalCounter = 0;
        let subTotalAmount = 0;
        this.state.cartItems.map((item) => (totalCounter += item.count));
        this.state.cartItems.map((item) => (subTotalAmount += item.price * item.count));
        const totalAmount = (Math.round(subTotalAmount*100)/100).toFixed(2);
        this.setState(() => {
            return {
                totalCount: totalCounter,
                totalPrice: totalAmount,
            };
        });
    }

    handleRemoveFromCart = (e, product) => {
        const { selectedProductId } = this.state;
        const { cartItems } = this.state;
        this.setState(
            {
                cartItems: cartItems.filter((a) => a._id !== product._id),
                selectedProductId: { ...selectedProductId, [product._id]: false },
            },
            () => {
                this.addProdValues(e);
            }
        );
    };

    countIncrement = (e, product) => {
        const { cartItems } = this.state;
        const index = cartItems.indexOf(product);
        // eslint-disable-next-line no-unused-expressions
        index > -1 ? cartItems[index].count++ : '';
        this.setState({
            cartItems: cartItems,
        });
        this.addProdValues(e);
    };

    countDecrement = (e, product) => {
        const { cartItems } = this.state;
        const index = cartItems.indexOf(product);
        cartItems[index].count > 1 ? cartItems[index].count-- : alert('Quantity cannot be zero');
        this.setState({
            cartItems: cartItems
        });
        this.addProdValues(e);
    };

    toggleCartShow = (e) => {
        this.setState((state) => ({
            isCartVisible: !state.isCartVisible,
        }));
    };

    toggleCartHide = (e) => {
        this.setState((state) => ({
            isCartVisible: !state.isCartVisible,
        }));
    };

    handleChangeSort = (e) => {
        this.setState({ sort: e.target.value });
        this.filteredResults();
    };

    handleChangeFilter = (e) => {
        this.setState({ filter: e.target.value });
        this.filteredResults();
    };

    filteredResults() {
        this.setState((state) => {
            if (state.sort !== '') {
                state.productData.sort((a, b) =>
                    state.sort === 'lowest'
                        ? a.price > b.price
                            ? 1
                            : -1
                        : a.price < b.price
                        ? 1
                        : -1
                );
            } else {
                state.productData.sort((a, b) => (a.id > b.id ? 1 : -1));
            }
            if (state.filter !== '') {
                return {
                    filteredProducts: state.productData.filter(
                        (arr) => arr.gender.indexOf(state.filter) >= 0
                    ),
                };
            }
            return {
                filteredProducts: state.productData,
            };
        });
    }

    render() {
        const {
            cartItems,
            isCartVisible,
            filteredProducts,
            sort,
            filter,
            inCart,
            selectedProductId,
            totalCount,
            totalPrice,
            productDetail,
            productData,
        } = this.state;
        return (
            <BrowserRouter>
                <Menu
                    cartItems={cartItems}
                    toggleCartShow={this.toggleCartShow}
                    totalCount={totalCount}
                />
                <Cart
                    cartItems={cartItems}
                    isCartVisible={isCartVisible}
                    toggleCartHide={this.toggleCartHide}
                    handleRemoveFromCart={this.handleRemoveFromCart}
                    countIncrement={this.countIncrement}
                    countDecrement={this.countDecrement}
                    totalCount={totalCount}
                    totalPrice={totalPrice}
                />
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={(props) => (
                            <Products
                                productData={filteredProducts}
                                handleDetail={this.handleDetail}
                                handleAddToCart={this.handleAddToCart}
                                handleRemoveFromCart={this.handleRemoveFromCart}
                                sort={sort}
                                filter={filter}
                                inCart={inCart}
                                selectedProductId={selectedProductId}
                                handleChangeFilter={this.handleChangeFilter}
                                handleChangeSort={this.handleChangeSort}
                            />
                        )}
                    />

                    <Route
                        path='/productDetails'
                        render={(props) => (
                            <ProductDetails
                                productDetail={productDetail}
                                productData={productData}
                                handleAddToCart={this.handleAddToCart}
                                selectedProductId={selectedProductId}
                                countIncrement={this.countIncrement}
                                countDecrement={this.countDecrement}
                                countInc={this.countInc}
                                countDec={this.countDec}
                            />
                        )}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
