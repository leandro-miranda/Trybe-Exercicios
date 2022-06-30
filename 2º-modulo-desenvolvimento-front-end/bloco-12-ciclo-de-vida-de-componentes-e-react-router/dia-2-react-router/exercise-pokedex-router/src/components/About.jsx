import React from 'react';
import '../styles/about.css';

const About = () => (
  <section>
    <h2> About Pokédex </h2>
    <section>
      <p>
        This application simulates a Pokédex,
        a digital encyclopedia containing all Pokémons
      </p>
      <p> One can filter Pokémons by type, and see more details for each one of them </p>
      <img
        className="pokedex-image"
        src="/pokedex.svg"
        alt="Pokédex"
      />
    </section>
  </section>
);

export default About;
