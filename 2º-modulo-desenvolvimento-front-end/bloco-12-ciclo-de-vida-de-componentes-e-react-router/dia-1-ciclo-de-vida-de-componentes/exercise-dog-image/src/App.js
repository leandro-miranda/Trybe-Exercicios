import React, { Component } from 'react'
// import './App.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      data: '',
      name: '',
      array: [],
    };
  }

  componentDidMount() {
    // Solicita a imagem assim que a página for renderizada
    // Se já temos uma imagem guardada, vamos mostrá-la em vez de pedir uma nova
    if(localStorage.namedDogUrl) {
      const parseStorage = JSON.parse(localStorage.namedDogUrl);
      const lastDog = parseStorage[parseStorage.length - 1].message;
      this.setState({
        array: parseStorage,
        data: {message: lastDog},
      });
    } else {
    this.fetchDog();
    }
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

  saveData = () => {
    const {
      data: {message},
      name,
      array,
    } = this.state;
// atualizando e guardando a lista inteira de imagens no `localStorage`
    const dogData = {message, name};
    const newArray = [...array, dogData];
    this.setState({array: newArray});
    this.setState({name: ''});
    localStorage.setItem("namedDogUrl", JSON.stringify(newArray));

  }

  render() {
    const {data, name} = this.state
    // Enquanto a requisição é feita, o texto `'Loading...'` aparece
    if(data === '') return 'Loading...';
    return (
      <div>
        <p>Doguinhos</p>
        {/* Adiciona um botão para buscar mais um _doguinho_. */}
        <button type='button' onClick={this.fetchDog}>Novo doguinho</button>
        <div>
          <input 
            type="text"
            value={ name }
            onChange={(element) => this.setState({name: element.target.value})}
            placeholder='Digite o nome do doguinho'
          />
          <button type='button' onClick={this.saveData}>Salvar doguinho!</button>
        </div>
        <div>
          <img src={data.message} alt={data.message}/>
        </div>
      </div>
    );
  }
}

