import React from "react";
import Pokedex from "../components/Pokedex"
import '../index.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Pokedex />
      </div>
    )
  }
}

export default App;
