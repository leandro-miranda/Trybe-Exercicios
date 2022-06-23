import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types/index';
import Button from './Button';
import '../styles/pokedex.css';
import '../styles/button.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { pokemons } = this.props;
    this.state = { index: 0, pokemons };
  }

  handleClick = () => {
    const { index, pokemons } = this.state;

    if (index !== pokemons.length - 1) {
      this.setState((prev) => ({ index: prev.index + 1 }));
    } else {
      this.setState({ index: 0 });
    }
  };

  handleClickFilter = (filter) => {
    const { pokemons } = this.props;
    const filteredPokemon = pokemons.filter(
      (pokemon) => pokemon.type === filter,
    );
    if (filter === 'All') {
      this.setState({ pokemons, index: 0 });
    } else {
      this.setState({ pokemons: filteredPokemon, index: 0 });
    }
  };

  render() {
    const { index, pokemons } = this.state;
    const { pokemons: propPokemons } = this.props;
    const types = [
      'All',
      ...new Set(propPokemons.map((pokemon) => pokemon.type)),
    ];
    return (
      <div className="pokedex">
        {
          pokemons.map((pokemon) => (
            <Pokemon key={ pokemon.id } pokemon={ pokemon } />
          ))[index]
        }
        <div className="pokedex-buttons-panel">
          <Button
            className="filter-button"
            name="Próximo Pokemon"
            func={ this.handleClick }
            disabled={ pokemons.length === 1 }
          />
          {types.map((type) => (
            <Button
              className="filter-button"
              name={ type }
              key={ type }
              func={ () => this.handleClickFilter(type) }
            />
          ))}
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
