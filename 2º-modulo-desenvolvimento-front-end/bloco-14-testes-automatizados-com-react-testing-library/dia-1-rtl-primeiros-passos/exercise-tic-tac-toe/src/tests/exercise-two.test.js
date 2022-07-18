import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Comportamento de cada casa', () => {
  test('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_0'));
    expect(screen.getByAltText('X')).toBeInTheDocument();
    expect(screen.queryByAltText('O')).not.toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_1'));
    expect(screen.getByAltText('X')).toBeInTheDocument();
    expect(screen.getByAltText('O')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_2'));
    expect(screen.getAllByAltText('X')).toHaveLength(2);
    expect(screen.getByAltText('O')).toBeInTheDocument();
  });

  test('O simbolo precisa ser trocado ao clicar em uma casa para a outra,"X" para "O", começando com o "X"', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_0'));
    expect(screen.getByAltText('X')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_1'));
    expect(screen.getByAltText('O')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_2'));
    expect(screen.queryByTestId('cell_2_image')).toBeInTheDocument();
    expect(screen.getAllByAltText('X')).toHaveLength(2);
  });

  test('Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_0'));
    expect(screen.getByAltText('X')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('cell_0'));
    userEvent.click(screen.getByTestId('cell_2'));
    expect(screen.queryByAltText('O')).toBeInTheDocument();
  });

  test('O simbolo das casas precisam ser mantidas, quando outra casa for clicada', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_0'));
    const cellZeroImage = screen.getByTestId('cell_0_image');
    expect(cellZeroImage).toEqual(screen.getByAltText('X'));

    userEvent.click(screen.getByTestId('cell_1'));
    const cellOneImage = screen.getByTestId('cell_1_image');
    expect(cellZeroImage).toEqual(screen.getByAltText('X'));
    expect(cellOneImage).toEqual(screen.getByAltText('O'));

    userEvent.click(screen.getByTestId('cell_2'));
    const cellTwoImage = screen.getByTestId('cell_2_image');
    expect(cellZeroImage).toEqual(screen.getAllByAltText('X')[0]);
    expect(cellOneImage).toEqual(screen.getByAltText('O'));
    expect(cellTwoImage).toEqual(screen.getAllByAltText('X')[1]);
  });

  test('O simbolo não pode ser mudado se a casa for clicada duas vezes seguidas.', () => {
    render(<App />);

    userEvent.click(screen.getByTestId('cell_0'));
    const cellZeroImage = screen.getByTestId('cell_0_image');
    expect(cellZeroImage).toEqual(screen.getByAltText('X'));

    userEvent.click(screen.getByTestId('cell_0'));
    expect(cellZeroImage).toEqual(screen.queryByAltText('X'));
  });
});
