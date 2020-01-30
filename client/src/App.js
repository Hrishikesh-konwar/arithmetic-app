import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Home';
import History from './pages/History';
import About from './pages/About';
import Gallery from './pages/Gallery';

import './App.css';

class App extends React.Component{

  render = () => {
    
    return (
      <Router>
        <Header/>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route>        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>      
        <Route path="/">
          <Home />
        </Route>                  
      </Switch>
    </Router>
    );
  }
}

export default App;
