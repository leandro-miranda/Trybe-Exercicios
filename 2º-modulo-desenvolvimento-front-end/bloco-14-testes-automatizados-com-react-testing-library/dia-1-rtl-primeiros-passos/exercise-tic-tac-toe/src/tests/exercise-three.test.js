/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const CELL_0 = 0;
const CELL_1 = 1;
const CELL_2 = 2;
const CELL_3 = 3;
const CELL_4 = 4;
const CELL_5 = 5;
const CELL_6 = 6;
const CELL_7 = 7;

const RESTART_BUTTON = 'restart_button';

const winnerSymbols = ['X', 'O'];

winnerSymbols.forEach((winnerSymbol) => {
  describe(`Condições de vitória para o Jogador ${winnerSymbol}`, () => {
    const getStartOfAnotherLine = (cellId) => {
      if (cellId >= CELL_0 && cellId <= CELL_2) return CELL_3;
      if (cellId >= CELL_3 && cellId <= CELL_5) return CELL_6;
      return 0;
    };

    const firstCellsOfLines = [CELL_0, CELL_3, CELL_6];
    firstCellsOfLines.forEach((cellId) => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da linha a partir da casa ${cellId}`, () => {
        const opponentsLine = getStartOfAnotherLine(cellId);
        render(<App />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherLine(opponentsLine);
          userEvent.click(screen.getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        userEvent.click(screen.getByTestId(`cell_${cellId}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsLine}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + 1}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsLine + 1}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + 2}`));
        const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
        expect(screen.queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
      });
    });

    const getStartOfAnotherColumn = (cellId) => {
      if (cellId === CELL_0 || cellId === CELL_3 || cellId === CELL_6) return 1;
      if (cellId === CELL_1 || cellId === CELL_4 || cellId === CELL_7) return 2;
      return 0;
    };

    const firstCellsOfColumns = [0, 1, 2];
    firstCellsOfColumns.forEach((cellId) => {
      test(`Alcançar a vitória ao colocar o mesmo simbolo em todas as casas da coluna ${cellId}`, () => {
        const opponentsColumn = getStartOfAnotherColumn(cellId);
        render(<App />);

        if (winnerSymbol === 'O') {
          const cellNotRelatedToVictory = getStartOfAnotherColumn(opponentsColumn);
          userEvent.click(screen.getByTestId(`cell_${cellNotRelatedToVictory}`));
        }

        userEvent.click(screen.getByTestId(`cell_${cellId}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsColumn}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + CELL_3}`));
        userEvent.click(screen.getByTestId(`cell_${opponentsColumn + CELL_3}`));
        userEvent.click(screen.getByTestId(`cell_${cellId + CELL_6}`));
        const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
        expect(screen.queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
      });
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal esquerda para direita (primeira,quinta,nona casa)', () => {
      render(<App />);

      if (winnerSymbol === 'O') userEvent.click(screen.getByTestId('cell_5'));
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_8'));
      const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
      expect(screen.queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
    });

    test('Alcançar a vitória ao colocar o mesmo simbolo na diagonal direita para esquerda (terceira,quinta,sétima casa)', () => {
      render(<App />);

      if (winnerSymbol === 'O') userEvent.click(screen.getByTestId('cell_5'));
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_8'));
      const winPlayer = winnerSymbol === 'O' ? 'O' : 'X';
      expect(screen.queryByText(`Player ${winPlayer} Ganhou`)).toBeInTheDocument();
    });
  });

  describe('bonus', () => {
    test('Empatar um jogo', () => {
      render(<App />);
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_1'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_7'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_5'));
      userEvent.click(screen.getByTestId('cell_8'));
      userEvent.click(screen.getByTestId('cell_6'));

      expect(screen.queryByText('Empate')).toBeInTheDocument();
    });

    test('Reiniciar um jogo em empate', () => {
      render(<App />);
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_1'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_7'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_5'));
      userEvent.click(screen.getByTestId('cell_8'));
      userEvent.click(screen.getByTestId('cell_6'));

      expect(screen.queryByText('Empate')).toBeInTheDocument();

      userEvent.click(screen.getByTestId(RESTART_BUTTON));
      expect(screen.queryByText('Empate')).not.toBeInTheDocument();
      expect(screen.queryByAltText('X')).not.toBeInTheDocument();
      expect(screen.queryByAltText('O')).not.toBeInTheDocument();
    });

    test('Reiniciar um jogo no meio da partida', () => {
      render(<App />);
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_1'));
      userEvent.click(screen.getByTestId('cell_2'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_7'));
      userEvent.click(screen.getByTestId(RESTART_BUTTON));
      expect(screen.queryByAltText('X')).not.toBeInTheDocument();
      expect(screen.queryByAltText('O')).not.toBeInTheDocument();
    });

    test('Reiniciar um jogo ganho pelo jogador X', () => {
      render(<App />);
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_1'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_2'));
      expect(screen.queryByText('Player X Ganhou')).toBeInTheDocument();
      userEvent.click(screen.getByTestId(RESTART_BUTTON));
      expect(screen.queryByAltText('X')).not.toBeInTheDocument();
      expect(screen.queryByAltText('O')).not.toBeInTheDocument();
    });

    test('Reiniciar um jogo ganho pelo jogador O', () => {
      render(<App />);
      userEvent.click(screen.getByTestId('cell_3'));
      userEvent.click(screen.getByTestId('cell_0'));
      userEvent.click(screen.getByTestId('cell_4'));
      userEvent.click(screen.getByTestId('cell_1'));
      userEvent.click(screen.getByTestId('cell_8'));
      userEvent.click(screen.getByTestId('cell_2'));
      expect(screen.queryByText('Player O Ganhou')).toBeInTheDocument();
      userEvent.click(screen.getByTestId(RESTART_BUTTON));
      expect(screen.queryByAltText('X')).not.toBeInTheDocument();
      expect(screen.queryByAltText('O')).not.toBeInTheDocument();
    });
  });
});
