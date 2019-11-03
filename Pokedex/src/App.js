import React, { Component } from 'react';

import './App.css';
import Pokemons from './pages/pokemons';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Lorem from './pages/lorem';
import NavBar from "./layout/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <NavBar/>
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