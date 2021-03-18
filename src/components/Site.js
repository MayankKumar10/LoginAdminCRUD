import React from 'react'
import { Home } from "./Home";
import { AddUser } from "./AddUser";
import { EditUser } from "./EditUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalProvider } from "../context/GlobalState";

import "bootstrap/dist/css/bootstrap.css";

function Site() {
    return (
<div>

<nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>                        
        </button>
      
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login </a></li>
      </ul>
    </div>
  </div>
</nav>

    <div className="jumbotron">
        <div className="container text-center">
            
        <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>

      <GlobalProvider id="table1" >
        <Router>
          <Switch>
            <Route exact path="/table" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
      
    </div>

    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/table" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>

        </div>
    </div>
  
<div className="container-fluid bg-3 text-center">    
  
  <div className="row">
    
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
    
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
    
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
    
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
  
  </div>

</div> <br/>

<div className="container-fluid bg-3 text-center">    
  <div className="row">
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive" style={{width: "100%"}}   />
    </div>
  </div>
</div><br/><br/>


<footer className="container-fluid text-center">
  <p> Table </p>
</footer>

 </div>

 
    )
}

export default Site
