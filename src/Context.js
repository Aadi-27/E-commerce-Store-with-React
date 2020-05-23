import React, { Component } from 'react';
import axios from 'axios';
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        productData: [],
        filteredProducts: [],
        productDetail: [],
        cartItems: [],
        isCartVisible: false,
        selectedProductId: [],
        totalCount: 0,
        totalPrice: 0,
        isLoading: true
    };
    componentDidMount() {
        axios
            .get('https://wrapsy-server.herokuapp.com/')
            .then((res) => {
                this.setState({
                    productData: res.data,
                    filteredProducts: res.data,
                    isLoading: false
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
        return(
            <ProductContext.Provider value={{
                productData: this.state.filteredProducts,
                sort: this.state.sort,
                filter: this.state.filter,
                inCart: this.state.inCart,
                selectedProductId: this.state.selectedProductId,
                productDetail: this.state.productDetail,
                cartItems: this.state.cartItems,
                isCartVisible: this.state.isCartVisible,
                totalCount: this.state.totalCount,
                totalPrice: this.state.totalPrice,
                isLoading: this.state.isLoading,
                toggleCartHide: this.toggleCartHide,
                toggleCartShow: this.toggleCartShow,
                handleDetail: this.handleDetail,
                handleAddToCart: this.handleAddToCart,
                handleRemoveFromCart: this.handleRemoveFromCart,
                countIncrement: this.countIncrement,
                countDecrement: this.countDecrement,
                handleChangeFilter: this.handleChangeFilter,
                handleChangeSort: this.handleChangeSort,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };