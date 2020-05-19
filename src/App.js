import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from './components/header/Menu';
import Products from './components/catalog/Products';
import ProductDetails from './components/product/ProductDetails';
import Cart from './components/cart/Cart';
import { ProductProvider } from './Context';
import NewCollection from './components/catalog/Sidebar Menu/NewCollection';
import TopPicks from './components/catalog/Sidebar Menu/TopPicks';
import Trending from './components/catalog/Sidebar Menu/Trending';
import Ocassion from './components/catalog/Sidebar Menu/Ocassion';
import Categories from './components/catalog/Sidebar Menu/Categories';

class App extends Component {
    render() {
        return (
            <ProductProvider>
                <Router>
                    <Menu/>
                    <Cart/>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component = {Products}
                        />
                        <Route 
                            path='/new-collection' 
                            component = {NewCollection}
                        />
                        <Route 
                            path='/ocassion' 
                            component = {Ocassion}
                        />
                        <Route 
                            path='/gift-categories' 
                            component = {Categories}
                        />
                        <Route 
                            path='/our-top-picks' 
                            component = {TopPicks} 
                            />
                        <Route 
                            path='/trending' 
                            component = {Trending} 
                            />
                        <Route
                            path='/productDetails'
                            component = {ProductDetails}
                        />
                    </Switch>
                </Router>
            </ProductProvider>
        );
    }
}

export default App;
