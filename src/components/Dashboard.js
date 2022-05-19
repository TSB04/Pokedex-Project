import React, { Component } from 'react';
import PokemonList from '../api/PokemonList';


export default class Dashboard extends Component {
  render() {
    return (
        <div>
            <h1>My pokedex</h1>
            <div>
                <PokemonList />
            </div>
      </div>
    );
  }
}
