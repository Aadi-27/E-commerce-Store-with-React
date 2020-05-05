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
  }
  async componentWillMount() {
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
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path='/' render={props => (<Products productData={this.state.productData}  />)} />
          <Route path='/productDetails' render={props => (<ProductDetails productDetail={this.state.productDetail} />)} />
          {/* <Route path='/cart' render={props => (<Cart productData={this.state.productData} />)} /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
