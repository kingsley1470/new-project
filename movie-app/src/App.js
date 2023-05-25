import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar-components/Navbar';
import Home from './components/home-components/Home';
import About from './components/about-components/About';
import Contact from './components/contact-components/Contact';
import SignIn from './components/signin-components/SignIn';
import SignOut from './components/signout-components/SignOut';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signout" component={SignOut} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
