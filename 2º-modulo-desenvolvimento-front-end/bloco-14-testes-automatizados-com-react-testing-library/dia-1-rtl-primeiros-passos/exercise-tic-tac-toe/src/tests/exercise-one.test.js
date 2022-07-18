import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

const BOARD_SIZE = 9;

describe('Configuração inicial do jogo', () => {
  test('Verificar se foi renderizada nove casas', () => {
    render(<App />);

    for (let i = 0; i < BOARD_SIZE; i += 1) {
      expect(screen.getByTestId(`cell_${i}`)).toBeInTheDocument();
    }
  });

  test('Começar com todos os espaços em branco.', () => {
    render(<App />);

    expect(screen.queryByAltText('X')).not.toBeInTheDocument();
    expect(screen.queryByAltText('O')).not.toBeInTheDocument();
  });

  test('Começar sem a frase "Fim de jogo"', () => {
    render(<App />);

    expect(screen.queryByText('Player O Ganhou')).not.toBeInTheDocument();
  });
});
