import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/header/Menu';
import Products from './components/catalog/Products';
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/cart/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: [], filteredProducts: [], productDetail: {}, cartItems: [], count: 1 }
    this.handleDetail = this.handleDetail.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8000/productCatalog')
    const data = await response.json()

    this.setState({
      productData: data,
      filteredProducts: data,
    })
  }
  handleDetail = (e, product) => {
    this.setState({productDetail: product})
  }
  handleAddToCart = (e, product) => {
    this.setState({count: this.state.count + 1});
    this.addItems(e, product)
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
        state.cartItems.push({...product, count:1})
      }
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      // return state.cartItems;
    })
    console.log(this.state.cartItems)
    console.log(this.state.count)

  }
  handleRemoveFromCart = () => {
    console.log('added')
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
    return (
      <BrowserRouter>
        <Menu cartItems={this.state.cartItems}/>
        <Cart cartItems={this.state.cartItems}/>
        <Switch>
          <Route exact path='/' render={props => (<Products productData={this.state.filteredProducts}
          handleDetail={this.handleDetail} handleAddToCart={this.handleAddToCart} handleRemoveFromCart={this.handleRemoveFromCart}
          sort={this.state.sort} filter={this.state.filter}
          handleChangeFilter={this.handleChangeFilter} handleChangeSort={this.handleChangeSort} />)} />
          
          <Route path='/productDetails' render={props => (<ProductDetails productDetail={this.state.productDetail} productData={this.state.productData} />)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
