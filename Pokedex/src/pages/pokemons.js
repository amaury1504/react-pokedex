import React from 'react';
import logo from '../logo.svg';

import Item from '../components/titre.js';
import List from '../components/list';
import Clock from '../container/clock';
import Form from '../components/form';
import data from '../data.json';


class Pokemons extends React.Component{
    state = {
        value: '',
    };
    
    handleSubmit = this.handleSubmit.bind(this)
    
    handleSubmit(ev){
        ev.preventDefault();
        this.setState({
            value: new FormData(ev.currentTarget).get('filter'),
        });
      }

    render(){
        const filteredPokemons = data.pokemons.filter(pokemons=>
            pokemons.titre.toLowerCase().includes(this.state.value.toLowerCase()),
            )
      
            return(
            
                <div className="App">
                <header className="App-header">
                  <h1>Pokédex</h1>
                  <Item/>
                  <Form handleSubmit={this.handleSubmit} value={this.state.value} />
                  <List data={filteredPokemons} />
                  <Clock/>
                </header>
              </div>
            );
    }
}

export default Pokemons