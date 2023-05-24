import "./App.css";

import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
 import SignIn from "./components/SignIn";
 import SignOut from "./components/SignOut"
 
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
             <li> 
               <Link to="/signIn">Sign In</Link> 
            </li> 
            <li> 
              <Link to="/signOut">Sign Out</Link> 
            </li> 
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
           <Route path="/signin" component={SignIn} /> 
           <Route path="/signOut" component={SignOut} /> 
        </Switch>
      </div>
    </Router>
  );
};

export default App;
