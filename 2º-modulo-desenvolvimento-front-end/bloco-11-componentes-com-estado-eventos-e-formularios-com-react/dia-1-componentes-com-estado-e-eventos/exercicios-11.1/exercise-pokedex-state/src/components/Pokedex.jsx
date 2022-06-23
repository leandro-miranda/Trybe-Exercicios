import React from 'react';
import {
  arrayOf,
} from 'prop-types';

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
    const filteredPokemon = pokemons.filter((pokemon) => pokemon.type === filter);
    if (filter === 'All') {
      this.setState({ pokemons, index: 0 });
    } else {
      this.setState({ pokemons: filteredPokemon, index: 0 });
    }
  }

  render() {
    const { index, pokemons } = this.state;
    const { pokemons: propPokemons } = this.props;
    const types = [
      'All',
      ...new Set(propPokemons.map((pokemon) => pokemon.type)),
    ];
    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokemon key={ pokemon.id } pokemon={ pokemon } />
        ))[index]}
        <div className="pokedex=buttons-panel">
          <Button
            name="Próximo Pokemon"
            func={ this.handleClick }
            disabled={ pokemons.length === 1 }
            className="filter=button"
          />
          {types.map((type) => (
            <Button
              name={ type }
              key={ type }
              func={ () => this.handleClickFilter(type) }
              className="filter=button"
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

// class Pokedex extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       pokemonIndex: 0,
//       filteredType: 'all',
//     };
//   }

//   filterPokemons(filteredType) {
//     this.setState({ filteredType, pokemonIndex: 0 });
//   }

//   nextPokemon(numberOfPokemons) {
//     this.setState((state) => ({
//       pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
//     }));
//   }

//   fetchFilteredPokemons() {
//     const { pokemons } = this.props;
//     const { filteredType } = this.state;

//     return pokemons.filter((pokemon) => {
//       if (filteredType === 'all') return true;
//       return pokemon.type === filteredType;
//     });
//   }

//   fetchPokemonTypes() {
//     const { pokemons } = this.props;
//     return [...new Set(pokemons.reduce((types, { type }) => [...types, type], []))];
//   }

//   render() {
//     const filteredPokemons = this.fetchFilteredPokemons();
//     const pokemonTypes = this.fetchPokemonTypes();
//     const { pokemonIndex } = this.state;
//     const pokemon = filteredPokemons[pokemonIndex];

//     return (
//       <div className="pokedex">
//         <Pokemon pokemon={ pokemon } />
//         <div className="pokedex=buttons-panel">
//           <Button
//             onClick={ () => this.filterPokemons('all') }
//             className="filter=button"
//           >
//             All
//           </Button>
//           {pokemonTypes.map((type) => (
//             <Button
//               key={ type }
//               onClick={ () => this.filterPokemons(type) }
//               className="filter-button"
//             >
//               {type}
//             </Button>
//           ))}
//         </div>
//         <Button
//           className="pokedex-button"
//           onClick={ () => this.nextPokemon(filteredPokemons.length) }
//           disabled={ filteredPokemons.length <= 1 }
//         >
//           Próximo pokémon
//         </Button>
//       </div>
//     );
//   }
// }
