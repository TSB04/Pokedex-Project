import React, { Component } from 'react';
import PokemonList from '../api/PokemonList';


export default class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <PokemonList />
        </div>
      </div>
    );
  }
}