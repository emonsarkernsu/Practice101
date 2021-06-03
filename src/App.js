import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from  './Navbar';
import React, {useState, useEffect} from 'react';
import Signin from './Signin'
import Signout from './Signout'
import Employee from './Employee'
import { Route, Switch } from "react-router-dom";
const App = () => {

  return (
    <>
  <div class="topnav">

 <a href="#Signout">Sign Out</a>
  <a href="#SignIn">Sign In</a>
  <a class="active" href="#home">Home</a>

</div>

    <div className="App">

        <h1 className="heading">Kacher Dorja</h1>
        <p className="aboutus">kacherdorja aim in vbnjmkjhgfghyujik</p>
      <div className="footer"><h2>Contact Us
      FAQ
      Privacy Policy</h2></div>

      </div>

      </>
  );
 };



export default App;
