import React from "react";
import pokemons from "../data/data"
import Pokemon from "../components/Pokemon";
import '../index.css';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        {pokemons.map(({ id, name, type, averageWeight, image }) =>
          <Pokemon
            key={id}
            name={name}
            type={type}
            averageWeight={averageWeight}
            image={image}
          />)}
      </div>
    );
  }
}

export default Pokedex;