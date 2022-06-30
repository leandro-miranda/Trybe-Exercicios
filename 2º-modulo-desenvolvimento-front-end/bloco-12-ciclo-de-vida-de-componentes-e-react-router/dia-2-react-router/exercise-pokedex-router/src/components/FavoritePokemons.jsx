import React, { Component } from 'react';
import { pokemonType } from 'prop-types';
import Pokemon from './Pokemon';
import '../styles/favorite-pokemons.css';

export default class FavoritePokemons extends Component {
  static notFound() {
    return (
      <div>
        <p>No favorite pokemon found</p>
      </div>
    );
  }

  static renderFavoritePokemon(pokemon) {
    return (
      <div key={ pokemon.id } className="favorite-pokemon">
        <Pokemon pokemon={ pokemon } isFavorite />
      </div>
    );
  }

  renderFavoritePokemons() {
    const { pokemons } = this.props;
    const { renderFavoritePokemon } = FavoritePokemons;

    return (
      <div className="favorite-pokemons">
        {pokemons.map((pokemon) => renderFavoritePokemon(pokemon))}
      </div>
    );
  }

  render() {
    const { notFound } = FavoritePokemons;
    const { pokemons } = this.props;
    const isEmpty = pokemons.length === 0;

    return (
      <div>
        <h2> Favorite Pokémons </h2>
        {isEmpty ? notFound() : this.renderFavoritePokemons()}
      </div>
    );
  }
}

FavoritePokemons.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonType.isRequired),
};

FavoritePokemons.defaultProps = {
  pokemons: [],
};
