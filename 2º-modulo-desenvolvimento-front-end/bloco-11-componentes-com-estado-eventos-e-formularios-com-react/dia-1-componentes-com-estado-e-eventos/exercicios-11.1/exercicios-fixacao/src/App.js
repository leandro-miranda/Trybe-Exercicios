import React from "react";
import "./App.css";

// class App extends React.Component {
//   handleClick() {
//     console.log("Ciclou!");
//   }

//   render() {
//     return (
//       <button type="button" onClick={this.handleClick}>
//         Meu botão
//       </button>
//     );
//   }
// }

// function buttonOne() {
//   console.log("clicou!");
// }

// function buttonTwo() {
//   console.log("clicou!!");
// }

// function buttonThree() {
//   console.log("clicou!!!");
// }

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    };

    this.buttonOne = this.buttonOne.bind(this);
    this.buttonTwo = this.buttonTwo.bind(this);
    this.buttonTree = this.buttonTree.bind(this);
  }

  // A cor atual do botão deve ser impressa num console.log() de dentro da função
  // do evento que lida com o clique.Faça isso acontecer!
  buttonOne() {
    this.setState(
      ({ clicksBtnOne }) => ({
        clicksBtnOne: clicksBtnOne + 1,
      }),
      () => {
        console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
      }
    );
  }

  buttonTwo() {
    this.setState(
      ({ clicksBtnTwo }) => ({
        clicksBtnTwo: clicksBtnTwo + 1,
      }),
      () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.clicksBtnTwo)}`);
      }
    );
  }

  buttonTree() {
    this.setState(
      ({ clicksBtnThree }) => ({
        clicksBtnThree: clicksBtnThree + 1,
      }),
      () => {
        console.log(
          `Botão 3 ${this.getButtonColor(this.state.clicksBtnThree)}`
        );
      }
    );
  }
  // Defina uma lógica que estabeleça que, quando o número de cliques no botão
  // for par, ele deve ser verde.
  // Para essa função, não precisamos utilizar o bind porque ela é utilizada
  // apenas dentro do contexto do componente App
  getButtonColor(num) {
    return num % 2 === 0 ? "green" : "white";
  }

  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
          onClick={this.buttonOne}
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = {clicksBtnOne}
        </button>
        <button
          onClick={this.buttonTwo}
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = {clicksBtnTwo}
        </button>
        <button
          onClick={this.buttonTree}
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          Botão 3 | Count = {clicksBtnThree}
        </button>
      </div>
    );
  }
}

export default App;
