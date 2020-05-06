import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './components/header/Menu';
import Products from './components/catalog/Products';
import ProductDetails from './components/product/ProductDetails';
// import Cart from './components/cart/Cart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productData: [], filteredProducts: [], productDetail: [] }
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeSort = this.handleChangeSort.bind(this);
  }
  async componentDidMount() {
    const [response1, response2] = await Promise.all([
      fetch('http://localhost:8000/productCatalog'),
      fetch('http://localhost:8000/productDetail')
    ]);
    const 
    data1 = await response1.json(),
    data2 = await response2.json();

    this.setState({
      productData: data1,
      filteredProducts: data1,
      productDetail: data2
    })
  }

  handleChangeSort(e) {
    this.setState({sort: e.target.value})
    this.filteredResults();
  }
  handleChangeFilter(e) {
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
        <Menu />
        <Switch>
          <Route exact path='/' render={props => (<Products productData={this.state.filteredProducts} sort={this.state.sort} filter={this.state.filter}
           handleChangeFilter={this.handleChangeFilter} handleChangeSort={this.handleChangeSort} />)} />
          <Route path='/productDetails' render={props => (<ProductDetails productDetail={this.state.productDetail} productData={this.state.productData} />)} />
          {/* <Route path='/cart' render={props => (<Cart productData={this.state.productData} />)} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
