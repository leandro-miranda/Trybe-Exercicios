import React from 'react';
import '../styles/pokemon.css';
import { Link } from 'react-router-dom';
import { pokemonType } from '../types';

class Pokemon extends React.Component {
  render() {
    const { pokemon: {
      averageWeight: {
        measurementUnit, value,
      }, id, name, type, image,
    }, showDetailsLink, isFavorite,
    } = this.props;

    return (
      <div className="pokemon">
        <div className="pokemon-overview">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            {`Average weight: ${value} ${measurementUnit}`}
          </p>
          {showDetailsLink && <Link to={ `pokemons/${id}` }> More details </Link>}
        </div>
        <img src={ image } alt="{name} sprite" />
        {isFavorite && (
          <span
            className="favorite-icon"
            role="img"
            aria-label="star"
          >
            ⭐
          </span>
        )}
      </div>
    );
  }
}
Pokemon.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  pokemon: pokemonType.isRequired,
  showDetailsLink: PropTypes.bool,
};

Pokemon.defaultProps = {
  showDetailsLink: true,
};
export default Pokemon;
