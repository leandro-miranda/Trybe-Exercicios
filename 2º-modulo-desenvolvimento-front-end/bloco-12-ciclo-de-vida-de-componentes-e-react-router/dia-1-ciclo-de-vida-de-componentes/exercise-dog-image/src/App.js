import React, { Component } from 'react'
// import './App.css'

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

  shouldComponentUpdate(nextProps, nextState) {
    // Não atualize o componente se o doguinho for terrier
    if(nextState.data.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const {data} = this.state;
    // Guardando a URL do último doguinho no `localStorage`...
    localStorage.setItem("dogUrl", data.message);
    const dogBreed = data.message.split('/')[4];
    // ... e mostrando a raça dele usando um `alert`
    alert(dogBreed);
  }

  fetchDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((result) => this.setState({ data: result}));
  }

  render() {
    const {data} = this.state
    // Enquanto a requisição é feita, o texto `'Loading...'` aparece
    if(data === '') return 'Loading...';
    return (
      <div>
        <p>Doguinhos</p>
        {/* Adiciona um botão para buscar mais um _doguinho_. */}
        <button type='button' onClick={this.fetchDog}>Novo doguinho</button>
        <div>
          <img src={data.message} alt="Random dog"/>
        </div>
      </div>
    );
  }
}

