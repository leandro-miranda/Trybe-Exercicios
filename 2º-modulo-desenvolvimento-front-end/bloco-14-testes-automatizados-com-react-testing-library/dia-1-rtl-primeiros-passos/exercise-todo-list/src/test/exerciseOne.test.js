import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

const TASK_DESCRIPTION = 'Beber água!';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    const buttonAdd = screen.getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  test('Ao clicar no botão "Adicionar" a task deve ser adicionada a tela', () => {
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.queryByText('Adicionar');
    
  });
});
