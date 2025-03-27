import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="landing">
            <h1>Plant Paradise</h1>
            <p>Welcome to Plant Paradise, your one-stop shop for lush, vibrant houseplants to brighten your home.</p>
            <Link to="/products" className="get-started">Get Started</Link>
          </div>
        </Route>
        <Route path="/products" component={ProductList} />
        <Route path="/cart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;