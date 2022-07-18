import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isPokemonFavoriteByIdType, pokemonType } from '../types';
import Pokemon from './Pokemon';
import '../styles/pokemon-details.css';

export default class PokemonDetails extends Component {
  findPokemon(givenId) {
    const { pokemons } = this.props;

    return pokemons.find(({ id }) => id === givenId);
  }

  renderSummary({ summary }) {
    return (
      <section>
        <h2> Summary </h2>
        <p>
          {summary}
        </p>
      </section>
    );
  }

  renderHabitat({ foundAt, name }) {
    return (
      <section>
        <h2>
          {`Game Location of ${name}`}
        </h2>
        <div className="pokemon-habitat">
          {foundAt.map(({ location, map }) => (
            <div key={ location }>
              <img src={ map } alt={ `${name} location` } />
              <p>
                <em>{location}</em>
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  renderFavoriteInput = (pokemonId, isFavorite) => {
    const { onUpdateFavoritePokemons } = this.props;

    return (
      <form className="favorite-form">
        <label htmlFor="favorite">
          Pokémons favoritado?
          <input
            type="checkbox"
            id="favorite"
            checked={ isFavorite }
            onChange={ ({ target: { checked } }) => (
              onUpdateFavoritePokemons(pokemonId, checked)
            ) }
          />
        </label>
      </form>
    );
  }

  render() {
    const { renderFavoriteInput, renderHabitat, renderSummary } = this;
    const {
      match: { params: { id } },
      isPokemonFavoriteById,
    } = this.props;

    const pokemon = this.findPokemon(parseInt(id, 10));
    const isFavorite = isPokemonFavoriteById[id];

    return (
      <section className="pokemon-details">
        <h2>
          {`${pokemon.name} Details`}
        </h2>
        <Pokemon
          pokemon={ pokemon }
          showDetailsLink={ false }
          isFavorite={ isFavorite }
        />
        {renderSummary(pokemon)}
        {renderHabitat(pokemon)}
        {renderFavoriteInput(pokemon.id, isFavorite)}
      </section>
    );
  }
}

PokemonDetails.propTypes = {
  isPokemonFavoriteById: isPokemonFavoriteByIdType.isRequired,
  match: propTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onUpdateFavoritePokemons: PropTypes.func.isRequired,
  pokemons: PropTypes.arrayOf(pokemonType.isRequired).isRequired,
};
