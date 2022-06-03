require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  // 1 - Devemos adicionar o `async` no it e o `await` antes de chamar a função `getMagicCard`
  it('2 - Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    // O parâmetro "130550" é o id da carta, com ele podemos pegar as informações que precisamos
    const response = await getMagicCard('130550');
    const { name } = response;

    expect(name).toBe('Ancestor\'s Chosen');
  });

  it('3 - Deve ser uma função', () => {
    expect(typeof getMagicCard).toBe('function');
  });

  it('4 - Com o argumento "130550", a função fetch deve ser chamada', async () => {
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalled();
  });

  it('5 - Com o argumento "130550", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');

    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('6 - Deve retornar um objeto com as propriedades esperadas', async () => {
    const response = await getMagicCard('130550');

    expect(response).toEqual(card);
  });

  it('7 - Com o argumento "idDesconhecido", deve retornar um erro com a mensagem esperada', async () => {
    const response = await getMagicCard('idDesconhecido');

    expect(response).toEqual(new Error('Id is not found!'));
  });
});