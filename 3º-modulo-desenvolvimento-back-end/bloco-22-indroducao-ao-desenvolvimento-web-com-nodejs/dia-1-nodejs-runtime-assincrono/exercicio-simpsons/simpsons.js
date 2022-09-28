    // 🚀 Realize o download deste arquivo e salve-o como simpsons.json. Utilize o arquivo baixado para realizar os requisitos abaixo.

    // Utilize async/await para escrever seu código. Procure não utilizar callbacks.
    //     Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
    //     Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.
    //     Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
    //     Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4.
    //     Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.
    //     Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json.

// Solução

//     Não esqueça de colocar o arquivo simpsons.json na pasta que estiver trabalhando.
//     Crie um arquivo simpsons.js para colocar os scripts desse exercício.
//     Lembre-se de que para executar o código, é necessário rodar node simpsons.js.

// Solução

//     Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson

//     Importe o módulo fs/promises e realizar a leitura do arquivo dentro da função readAll.

const fs = require('fs').promises;


async function readAll() {

  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

}


// A função main é apenas para termos um ponto de entrada centralizado para o nosso script

async function main() {

  await readAll();

}


main();

    // Converta o conteúdo do arquivo de JSON para um array utilizando JSON.parse.

// ...

// const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

   const simpsons = JSON.parse(fileContent);

// ...

    // Mapeie cada objeto do array para uma string no formato correto.

// ...

// const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

// const simpsons = JSON.parse(fileContent);

   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

// ...

    // Exiba as strings na tela.

// ...

// const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

// const simpsons = JSON.parse(fileContent);

// const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);


  strings.forEach((string) => console.log(string));

// ...

// Solução

//     Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”

//     Crie a função, realizar a leitura do arquivo e a conversão do JSON em objeto.

const fs = require('fs').promises;


async function getSimpsonById(id) {

  const fileContent = await fs

    .readFile('./simpsons.json', 'utf-8');

  

  const simpsons = JSON.parse(fileContent);

}

    // Busque pelo Simpson desejado e caso não encontre, dispare um erro.

// async function getSimpsonById(id) {

//   const fileContent = await fs

//     .readFile('./simpsons.json', 'utf-8');

  

//   const simpsons = JSON.parse(fileContent);


     const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);


     if (!chosenSimpson) {

       /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.

        * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,

        * tendo como motivo o que passarmos para o `throw`.

        * Ou seja, a linha abaixo rejeita a Promise da nossa função com um Erro que tem a mensagem 'id não encontrado'

        */

       throw new Error('id não encontrado');

     }

// }

    // Caso a personagem exista, resolva a promise com suas informações.

// const fs = require('fs').promises;


// async function getSimpsonById(id) {

//   const fileContent = await fs

//     .readFile('./simpsons.json', 'utf-8');

  

//   const simpsons = JSON.parse(fileContent);


//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);


//   if (!chosenSimpson) {

//     /* A palavra-chave `throw` dispara um erro que deve ser tratado por quem chamou nossa função.

//      * Em funções `async`, utilizar `throw` faz com que a Promise seja rejeitada,

//      * tendo como motivo o que passarmos para o `throw`.

//      * Ou seja, a linha abaixo rejeita a Promise da nossa função com o motivo 'id não encontrado'

//      */

//     throw new Error('id não encontrado');

//   }


     /* Da mesma forma que `throw` aciona o fluxo de erro e rejeita a Promise,

      * `return` aciona o fluxo de sucesso e resolve a Promise.

      * Sendo assim, a linha abaixo é equivalente a chamar `resolve(chosenSimpson)`

      * dentro do executor de uma Promise.

      */

     return chosenSimpson;

// }

    // Para receber o retorno dessa função assíncrona, ou seja, a resolução dessa promise, precisamos usar await ao executá-la, assim:

// Opção 1:

async function main() {

  const simpson = await getSimpsonById(1);

  console.log(simpson);

}

    // Chame a função main.

// ...


main();

// Solução

//     Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6

//     Crie a função, nela faça a leitura do arquivo e o parse do JSON.

const fs = require('fs').promises;


async function filterSimpsons() {

  const fileContent = await fs

    .readFile('./simpsons.json', 'utf-8');

  

  const simpsons = JSON.parse(fileContent);

}

    // Filtre o array para remover as personagens que devem ser removidas.

// async function filterSimpsons() {

//   const fileContent = await fs

//     .readFile('./simpsons.json', 'utf-8');

  

//   const simpsons = JSON.parse(fileContent);


     const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

// }

    // Escreva no arquivo o novo array filtrado.

// async function filterSimpsons() {

//   const fileContent = await fs

//    .readFile('./simpsons.json', 'utf-8');


//   const simpsons = JSON.parse(fileContent);

//   const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');


     await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

// }

    // Chame a função na função main.

function main() {

  filterSimpsons();

  // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente

}

    // Chame a função main.

// ...


main();

// Solução

//     Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json, contendo as personagens com id de 1 a 4

//     Crie o arquivo simpsonFamily.json na raiz do exercício.

//     Crie a função, realize a leitura do arquivo e o parse do JSON.

const fs = require('fs').promises;


async function createSimpsonsFamily() {

  const fileContent = await fs

    .readFile('./simpsons.json', 'utf-8');


  const simpsons = JSON.parse(fileContent);

}

// ...

    // Crie um array com os IDs da família e filtrar apenas com os membros com esses IDs.

// ...

// async function createSimpsonsFamily() {

  // const fileContent = await fs

  //   .readFile('./simpsons.json', 'utf-8');


  // const simpsons = JSON.parse(fileContent);


  const familyIds = [1, 2, 3, 4];

  const simpsonsFamily = simpsons

    .filter((simpson) => familyIds.includes(Number(simpson.id))); // aqui convertemos o ID pra número, já que ele está salvo no JSON como string

// }

// ...

    // Escreva o novo arquivo no disco.

// ...

// async function createSimpsonsFamily() {

  // const fileContent = await fs

  //   .readFile('./simpsons.json', 'utf-8');


  // const simpsons = JSON.parse(fileContent);


  // const familyIds = [1, 2, 3, 4];

  // const simpsonsFamily = simpsons

  //   .filter((simpson) => familyIds.includes(Number(simpson.id)));


     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

// }

// ...

    // Chame a função na função main.

// ...

function main() {

  createSimpsonsFamily();

  // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente

}

    // Chame a função main.

// ...


main();

// Solução

//     Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz

//     Crie a função que realiza a leitura do arquivo e o pase do JSON:

const fs = require('fs').promises;


async function addNelsonToFamily() {

  const fileContent = await fs

    .readFile('./simpsonsFamily.json', 'utf-8');

  

  const simpsonsFamily = JSON.parse(fileContent);

}

    // Adicione uma nova pessoa ao array de simpsonsFamily.

// const fs = require('fs').promises;


// async function addNelsonToFamily() {

  // const fileContent = await fs

  //   .readFile('./simpsonsFamily.json', 'utf-8');

  

  // const simpsonsFamily = JSON.parse(fileContent);


    simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

// }

    // Escreva o novo conteúdo no arquivo.

// const fs = require('fs').promises;


// async function addNelsonToFamily() {

  // const fileContent = await fs

  //   .readFile('./simpsonsFamily.json', 'utf-8');

  

  // const simpsonsFamily = JSON.parse(fileContent);


  // simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });


     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));

// }

    // Chame a função na função main.

// ...

function main() {

  addNelsonToFamily(); // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente

}

    // Chame a função main.

// ...


main();

// Solução

//     Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json

//     Crie uma função que substitua o arquivo simpsonFamily.json e faça o parse do JSON.

//     Em seguida, filtre pelo id de Nelson Muntz e remova do array;

//     Adicione Maggie Simpson ao array filtrado anteriormente, no qual Nelson Muntz não está mais e salve a alteração no arquivo.

async function replaceNelson() {

  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);


  // Filtramos o array para remover o personagem Nelson

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');


  // Criamos um novo Array contendo a personagem Maggie

  const simpsonsWithMaggie = simpsonsWithoutNelson

    .concat([{ id: '15', name: 'Maggie Simpson' }]);

  // com spread seria assim: 

  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]


  // Escrevemos o novo array no arquivo e retornamos a promise de escrita

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));

}

    // Chame a função na função main.

// ...

function main() {

  replaceNelson(); // caso queira esperar a resolução, use o `await` ou `.then` como fizemos anteriormente

}

    // Chame a função main.

// ...


main()