import React from 'react';
import {BrowserRouter,Route,Link } from 'react-router-dom'
import Category from './Component/Category'
import Home from './Component/Home'
import Product from './Component/Product'
import './App.css';
import AdminArea from './Component/AdminArea';
import 'bootstrap/dist/css/bootstrap.css';





function App() {
  return (
  <BrowserRouter>
    
    <div className="App">
      <ul className="navbar nav justify-content-around  bg-light">
    <li className="nav-link "><Link to="/">Home</Link></li>
    <li><Link to="/Category">Category</Link></li>
    <li><Link to="/Product">Product</Link></li>
    <li><Link to="/AdminArena">Admin-Area</Link></li>

    </ul>
    <Route path="/" exact component={Home}></Route>
    <Route path="/Category" component={Category}></Route>
    <Route path="/Product" component={Product}></Route>
  
     <Route path="/AdminArena" component={AdminArea}></Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
