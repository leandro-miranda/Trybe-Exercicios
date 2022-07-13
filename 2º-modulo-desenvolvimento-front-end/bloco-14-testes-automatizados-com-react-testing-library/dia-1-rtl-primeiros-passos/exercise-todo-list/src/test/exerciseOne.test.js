import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

const TASK_DESCRIPTION = 'Beber água!';

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    // const buttonAdd = screen.getByText('Adicionar');
    // expect(buttonAdd).toBeInTheDocument();
    // expect(buttonAdd.type).toBe('button');
    // ou

    const button = screen.getByRole('button', { name: 'Adicionar' });
    expect(button).toBeInTheDocument();
  });

  test('Ao clicar no botão "Adicionar" a task deve ser adicionada a tela', () => {
    render(<App />);

    const inputTask = screen.getByLabelText('Tarefa:');
    const buttonAdd = screen.queryByText('Adicionar');
    userEvent.type(inputTask, TASK_DESCRIPTION);
    expect(screen.queryByText(TASK_DESCRIPTION)).not.toBeInTheDocument();
    userEvent.click(buttonAdd);
    expect(screen.queryByText(TASK_DESCRIPTION)).toBeInTheDocument();
  });
});
