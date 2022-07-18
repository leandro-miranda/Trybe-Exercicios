import React from 'react';
import GameBoard from './GameBoard';

const ONE_LINE_SIZE = 3;
const TWO_LINES_SIZE = 6;

class TicTacToe extends React.Component {
  static victoryAchievedInLine(gameBoard) {
    for (let i = 0; i <= TWO_LINES_SIZE; i += ONE_LINE_SIZE) {
      if (
        gameBoard[i] === gameBoard[i + 1]
        && gameBoard[i + 1] === gameBoard[i + 2]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  static victoryAchievedInColumn(gameBoard) {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + ONE_LINE_SIZE]
        && gameBoard[i + ONE_LINE_SIZE] === gameBoard[i + TWO_LINES_SIZE]
        && gameBoard[i] !== 0
      ) return gameBoard[i];
    }
    return false;
  }

  static victoryAchievedInDiagonals(gameBoard) {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    this.updateState = this.updateState.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  resetGame() {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    });
  }

  toggleActivePlayer() {
    const { activePlayer } = this.state;
    if (activePlayer === 1) return 2;
    return 1;
  }

  updateState(cellClicked) {
    this.setState((state) => {
      const newState = [...state.gameBoard];
      let newActivePlayer = state.activePlayer;

      if (state.gameBoard[cellClicked] === 0) {
        newState[cellClicked] = state.activePlayer;
        newActivePlayer = this.toggleActivePlayer();
      } else newState[cellClicked] = state.gameBoard[cellClicked];

      return {
        activePlayer: newActivePlayer,
        gameBoard: newState,
      };
    });
  }

  victoryAchieved() {
    const { gameBoard } = this.state;

    return (
      TicTacToe.victoryAchievedInLine(gameBoard)
      || TicTacToe.victoryAchievedInColumn(gameBoard)
      || TicTacToe.victoryAchievedInDiagonals(gameBoard)
    );
  }

  renderButton() {
    return (
      <button
        type="button"
        onClick={ this.resetGame }
        data-testid="restart-button"
      >
        Recomeçar Jogo
      </button>
    );
  }

  render() {
    const { gameBoard } = this.state;
    const win = this.victoryAchieved();
    if (!gameBoard.includes(0)) {
      return (
        <>
          {this.renderButton()}
          <h1>Empate</h1>
        </>
      );
    }
    return (
      <>
        {this.renderButton()}
        {(!win)
          ? (
            <GameBoard
              gameState={ gameBoard }
              updateGame={ this.updateState }
            />
          )
          : <h1>{`Player ${win === 2 ? 'O' : 'X'} Ganhou`}</h1>}
      </>
    );
  }
}

export default TicTacToe;
