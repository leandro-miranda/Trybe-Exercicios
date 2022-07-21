import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('testa as funcionalidades da aplicação', () => {
  afterEach(() => jest.clearAllMocks());

  test('Renderiza o App em seu estado inicial', () => {
    render(<App />);
    const linkElement = screen.getByText(/Search Digimon/i);

    expect(linkElement).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveTextContent('');
  });

  test('Insere um valor na caixa de busca', () => {
    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Agumon');
    expect(searchInput).toHaveValue('Agumon');
  });

  test('Verifica que a tela começa sem digimons renderizados', () => {
    render(<App />);

    const digimonName = screen.queryByTestId('digimonName');
    expect(digimonName).not.toBeInTheDocument();
  });

  test('Busca por um digimon', async () => {
    const digimon = [{
      name: 'Agumon',
      level: 'Rookie',
      img: 'https://digimon.shadowsmith.com/img/agumon.jpg',
    }];

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(digimon),
    }));

    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Agumon');
    expect(searchInput).toHaveValue('Agumon');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    await screen.findByText('level: Rookie');
    const digimonName = screen.getByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();
    const digimonImage = screen.getByAltText('Agumon');
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Agumon',
    );
  });

  test('Busca por um digimon inexistente', async () => {
    const ErrorMsg = 'A is not a Digimon in our database.';

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ ErrorMsg }),
    }));

    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Teste');
    expect(searchInput).toHaveValue('Teste');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    await screen.findByText('A is not a Digimon in our database.');

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste',
    );
  });

  test('Caso a caixa de busca esteja vazia, nenhum fetch é realizado', async () => {
    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.click(searchInput);
    expect(searchInput).toHaveValue('');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });

  test('A busca falha (erro no servidor)', async () => {
    // cria erros para o nosso mock do fetch
    const serverErrorMessage = 'Oops! Algo de errado não está certo!';
    const serverError = new Error(serverErrorMessage);
    const expectedMessage = `Erro ao fazer a requisição: Error: ${serverErrorMessage}`;

    // nesse caso, queremos simular a nossa API retornando um erro
    global.fetch = jest.fn(() => Promise.reject(serverError));

    // nossa aplicação gera uma mensagem no console.log quando ocorre algum
    // erro na API, então precisamos verificar isso também!

    // armazena a mensagem gerada pelo console.log que vamos mockar abaixo
    let logMessage = '';

    // cria um mock do console.log
    const mockedConsoleLog = (log) => { logMessage = log; };
    jest.spyOn(global.console, 'log').mockImplementation(mockedConsoleLog);

    render(<App />);

    const searchInput = screen.getByRole('textbox', { name: /Digimon/i });
    expect(searchInput).toHaveValue('');

    userEvent.type(searchInput, 'Teste');
    expect(searchInput).toHaveValue('Teste');

    const button = screen.getByRole('button', { name: /Search Digimon/i });
    expect(button).toBeInTheDocument();
    userEvent.click(button);

    // aqui verificamos se a API foi chamada
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      'https://digimon-api.vercel.app/api/digimon/name/Teste',
    );

    // precisamos aguardar o console.log ser chamado, pois estamos lidando
    // com uma chamada assíncrona
    await waitFor(() => expect(console.log).toHaveBeenCalledTimes(1));

    // verifica se a mensagem logada é a correta
    expect(logMessage).toStrictEqual(expectedMessage);
  });
});
