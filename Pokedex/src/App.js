import React, { Component } from 'react';

import './App.css';
import Pokemons from './pages/pokemons';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Lorem from './pages/lorem';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
              <Link to="/lorem">Lorem</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/pokemons">
            <Pokemons/>
          </Route>
          <Route path="/lorem">
            
            <Lorem/>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

  

export default App;