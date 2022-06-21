import React from "react";
import Pokedex from "../components/Pokedex"
import Header from "../components/Header"
import '../index.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Pokedex />
      </div>
    )
  }
}

export default App;
