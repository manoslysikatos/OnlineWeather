import React, {Component} from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';
import axios from 'axios';
import './App.scss';



document.onload = function(){
  
  document.getElementById("headerImg").style.height = window.innerHeight;
}

function App() {  
  function loadApp(){
    alert("Test");
    document.getElementById("headerImg").style.height = window.innerHeight;
  }
  

  return (
    <div onLoad={loadApp}>
      <div className="row fixed-top" id="top"><h1 className="col-12">Weather Daily</h1><span className="glyphicon glyphicon-chevron-down"></span></div>
      <header className="page-header header container-fluid" id="headerImg">
      <div className="overlay"></div>
        <div id="search">
          <h1>Live data across the globe</h1>
          <input type="text" placeholder="Search for a City..."></input>
          <button type="submit"><i className="fa fa-search"></i></button>
          
        </div>
        
      </header>
      
      <div className="resultTab row">
        <div className="col-4 column" id="dateInfo">
          <div className="row" >
            <h1>14:56:48</h1>
          </div>
          <div className="row">
            <h2>Thursday, May 19, 2019</h2>
          </div>
        </div>
        <div className="col-4 column">
          <div className="row locationName">
          <h2>New York City</h2>
          </div>
          <div className="row locationName">
          <h3>NEW YORK</h3>
          </div>
          <div id="temperature">
            <h1>20<span>&#8451;</span></h1>
          </div>
          
        </div>
        <div id="info" className="col-4 column">
          <h3>Test</h3>
        </div>
        
      </div>
    </div>
    
  );
}


export default App;
