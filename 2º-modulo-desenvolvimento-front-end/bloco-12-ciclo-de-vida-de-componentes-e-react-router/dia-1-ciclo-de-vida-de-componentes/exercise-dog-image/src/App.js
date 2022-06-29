import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    // Solicita a imagem assim que a página for renderizada
    this.fetchDog();
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((result) => this.setState({ data: result}));
  }

  render() {
    return (
      const {data} = this.state
      // Enquanto a requisição é feita, o texto `'Loading...'` aparece
    );
  }
}

