import logo from './logo.svg';
import './App.css';
import './index.css'
import Navbar from  './Navbar';
import React, {useState, useEffect} from 'react';
import Signin from './Signin'
import Signout from './Signout'
import Employee from './Employee'
import waves from './Videos/Waves.mp4';



import { NavLink, Route, Switch } from "react-router-dom";
const App = () => {

  return (
    <> 

      <div class="topnav">
      
        <Navbar/>
        
        
      </div>
        <Switch>
        <Route exact path ="/userpage">
        


        

          <div className="App">
            <h1 className="heading">Kacher Dorja</h1>
          
            <p className="aboutus">Find salaries, reviews and more</p>
          <div className="footer"><h2>Contact Us FAQ Privacy Policy</h2></div>
      
          </div>
          
        </Route>

        //Sign in page
        <Route exact path ="/signin">
        </Route>
      </Switch>
      </>
  );
 };



export default App;
