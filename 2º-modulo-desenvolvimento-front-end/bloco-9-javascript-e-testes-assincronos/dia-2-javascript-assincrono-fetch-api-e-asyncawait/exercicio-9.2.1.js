// Agora que tal um exercício menos guiado ? Vamos consultar uma API que fornece os 
// valores de crypto moedas e mostrar as 10 primeiras.
// Agora que temos a url vamos criar um arquivo(api.js, por exemplo) e dentro dele 
// uma função para pegar o array com as moedas.
// Pronto, temos um array com os dados das moedas e um esqueleto do HTML,
// agora vamos fazer com que as moedas apareçam na tela.Utilize o seguinte formato:
// Nome da moeda(símbolo da moeda): valor em dólares.Exemplo: Bitcoin(BTC): 46785.06.
// const fetch = require('node-fetch');

// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());
 
//   return coins;
// }

// const setCoins = async () => {
//   const coins = await fetchCoins();

//   const coinsList = document.getElementById('coins-list');

//   coins.forEach((coin) => {
//     const newLi = document.createElement('li');
//     const usdPrice = Number(coin.priceUsd);

//     newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;

//     coinsList.appendChild(newLi);
//   });
// }

// window.onload = () => setCoins();

// Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order
// Function para filtrar o array das moedas para mostrar apenas as 10 primeiras?
// Nessa solução utilizamos a propriedade `rank` da moeda para fazer o filtro 
// das 10 primeiras.
// Solução 1:
// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString()) // retorna uma string representado o obj
  
//   return coins;
// }

// const setCoins = async () => {
//   const coins = await fetchCoins();

//   const coinsList = document.getElementById('coins-list');

//   coins
//     .filter((coin) => Number(coin.rank) <= 10)
//     .forEach((coin) => {
//       const newLi = document.createElement('li');

//       newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

//       coinsList.appendChild(newLi);
//     });
// }

// window.onload = () => setCoins();

// Solução 2:
// Já nessa solução utilizamos o index disponível pela HOF `filter` para pegar 
// os 10 primeiros valores do array de moedas.
// const fetchCoins = async () => {
//   const url = 'https://api.coincap.io/v2/assets';

//   const coins = await fetch(url)
//     .then((response) => response.json())
//     .then((data) => data.data)
//     .catch((error) => error.toString());
  
//   return coins;
// }

// const setCoins = async () => {
//   const coins = await fetchCoins();

//   const coinsList = document.getElementById('coins-list');

//   coins
//     .filter((_, index) => index < 10)
//     .for_each((coin) => {
//       const newLi = document.createElement('li');

//       newLi.innerText = `${coin.name} (${coin.symbol}): ${coin.priceUsd}`;

//       coinsList.appendChild(newLi);
//     });
// }

// window.onload = () => setCoins();

// Bônus
// Que tal usarmos uma API para converter o preço das crypto moedas do exercício 
// anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar ?
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());
  
  return coins;
};

const fetchUsdCurrencies = async () => {
  const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
  const usdEndpoint = '/currencies/usd.min.json'
  const url = baseUrl.concat(usdEndpoint);

  const usdCurrencies = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.usd)
    .catch((error) => error.toString());
  
  return usdCurrencies;
};

const setCoins = async () => {
  const coins = await fetchCoins();
  const usdCurrencies = await fetchUsdCurrencies();

  const coinsList = document.getElementById('coins-list');

  coins
    .filter((coin) => Number(coin.rank) <= 10)
    .forEach((coin) => {
      const newLi = document.createElement('li');
      const usdPrice = Number(coin.priceUsd);
      const brlPrice = usdPrice * usdCurrencies.brl;

      newLi.innerText = `${coin.name} (${coin.symbol}): ${brlPrice.toFixed(2)}`;

      coinsList.appendChild(newLi);
    });
};

window.onload = () => setCoins();