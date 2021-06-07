import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from './Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import FAQ from './pages/FAQ';
import SignUp from './pages/SignUp';
import React, {useState, useEffect} from 'react';
import Signin from './Signin'
import Signout from './Signout'
import Employee from './Employee'
import { Router, NavLink, Route, Switch } from "react-router-dom";
const App = () => {

  return (


    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/faq' component={FAQ} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  </>
  );
 };



export default App;
