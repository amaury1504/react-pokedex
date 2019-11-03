import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class NavBar extends Component {
    render(){
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <ul>
                        <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">Pokemons</a>
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
            </div>
        );
    }
}