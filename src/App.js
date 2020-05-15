import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/header/Menu';
import Products from './components/catalog/Products';
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/cart/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: [], filteredProducts: [], productDetail: {}, cartItems: [], isCartVisible: false, selectedProductId: [], totalCount: 0, totalPrice: 0 }
    this.handleDetail = this.handleDetail.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    this.countIncrement = this.countIncrement.bind(this);
    this.countDecrement = this.countDecrement.bind(this);
    this.toggleCartShow = this.toggleCartShow.bind(this);
    this.toggleCartHide = this.toggleCartHide.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }
  async componentDidMount() {
    const response = await fetch('/', {method: "get"})
    const data = await response.json();
    console.log(data);

    this.setState({
      productData: data,
      filteredProducts: data,
    })
  }
  handleDetail = (e, product) => {
    this.setState({productDetail: product})
  }
  handleAddToCart = (e, product) => {
    const {selectedProductId} = this.state;
    this.addItems(e, product);
    this.setState({
      selectedProductId: {...selectedProductId, [product.id]: true}
    });
    console.log(this.state.totalPrice)
  }
  addItems(e, product) {
    let productInCart = false;
    this.setState(state => {
      state.cartItems.forEach(item => {
        if(item.id === product.id) {
          productInCart = true;
        }
      })
      if(!productInCart) {
        state.cartItems.push({...product, count: 1})
      }
    }, () => {this.addProdValues(e)});
  }
  addProdValues(e) {
    let totalCounter = 0;
    let subTotalAmount = 0;
    this.state.cartItems.map(item => totalCounter += item.count);
    this.state.cartItems.map(item => subTotalAmount += (item.price * item.count));
    this.setState(() => {
      return {
        totalCount: totalCounter,
        totalPrice: subTotalAmount
      }
    });
  }
  handleRemoveFromCart = (e, product) => {
    const {selectedProductId} = this.state;
    const {cartItems} = this.state;
    this.setState({
      cartItems: cartItems.filter(a => a.id !== product.id),
      selectedProductId: {...selectedProductId, [product.id]: false}
    }, () => {this.addProdValues(e)});
  }
  countIncrement = (e, product) => {
    const {cartItems} = this.state;
    const index = cartItems.indexOf(product);
    cartItems[index].count++;
    this.setState({
      cartItems: cartItems
    });
    this.addProdValues(e);
  }
  countDecrement = (e, product) => {
    const {cartItems} = this.state;
    const index = cartItems.indexOf(product);
    cartItems[index].count > 1 ?
    cartItems[index].count-- : 
    alert('Quantity cannot be zero')
    this.setState({
      cartItems: cartItems
    });
    this.addProdValues(e);
    console.log(this.state.totalPrice)
  }
  toggleCartShow = (e) => {
    this.setState(state => ({
      isCartVisible: !state.isCartVisible}));
  }
  toggleCartHide = (e) => {
    this.setState(state => ({
      isCartVisible: !state.isCartVisible}));
  }

  handleChangeSort = (e) => {
    this.setState({sort: e.target.value})
    this.filteredResults();
  }
  handleChangeFilter = (e) => {
    this.setState({filter: e.target.value})
    this.filteredResults();
  }
  filteredResults() {
    this.setState(state => {
      if(state.sort !== '') {
        state.productData.sort((a, b) => 
          (state.sort === 'lowest') ? 
          (a.price > b.price ? 1 : -1) :
          (a.price < b.price ? 1 : -1))
      }
      else{
        state.productData.sort((a, b) => a.id > b.id ? 1 : -1)
      }
      if(state.filter !== '') {
        return {filteredProducts: state.productData.filter(arr => 
          (arr.gender.indexOf(state.filter) >= 0)
        )}
      }
      return {
        filteredProducts: state.productData
      } 
    })
  }
  render() {
    const {cartItems, isCartVisible, filteredProducts, sort, filter, inCart,selectedProductId, totalCount, totalPrice, productDetail, productData} = this.state;
    return (
      <BrowserRouter>
        <Menu cartItems={cartItems} toggleCartShow={this.toggleCartShow} totalCount={totalCount}/>
        <Cart cartItems={cartItems} isCartVisible={isCartVisible} toggleCartHide={this.toggleCartHide} handleRemoveFromCart={this.handleRemoveFromCart} 
          countIncrement={this.countIncrement} countDecrement={this.countDecrement} totalCount={totalCount} totalPrice={totalPrice} />
        <Switch>
          <Route exact path='/' render={props => (<Products productData={filteredProducts}
          handleDetail={this.handleDetail} handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart}
          sort={sort} filter={filter} inCart={inCart} selectedProductId={selectedProductId} 
          handleChangeFilter={this.handleChangeFilter} handleChangeSort={this.handleChangeSort} />)} />
          
          <Route path='/productDetails' render={props => (<ProductDetails productDetail={productDetail} productData={productData}
          handleAddToCart={this.handleAddToCart} selectedProductId={selectedProductId} countIncrement={this.countIncrement} countDecrement={this.countDecrement} />)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
