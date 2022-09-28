// 1 - 🚀 Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.
// OBS: a sigla IMC, traduzida para o inglês, equivale a BMI(Body Mass Index). Vamos adotar este padrão nos códigos para começarmos a nos acostumar com o formado que aparecerá no mercado de trabalho!
// Armazene o código no arquivo bmi.js.
// A fórmula para calcular o IMC é weight / height ^ 2.
// Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
// Comece criando um novo pacote Node com npm init e respondendo às perguntas do npm.
// Por enquanto, não se preocupe em pedir input do usuário. Utilize valores fixos para weight e height.

// 2 - 🚀 Agora, permita que o código seja executado através do comando npm run bmi.
// O novo código criado deve conter o comando que chama o node para executar o arquivo bmi.js.
// Solução
// Edite o arquivo package.json para adicionar o novo script com a chave bmi e valor node bmi.js.


// 3 - 🚀 Chegou a hora de tornar nosso código mais interativo! Vamos adicionar inputs de entrada para quem usar.
// Edite o código para que os valores de weight e height sejam informados pela pessoa ao responder as perguntas: “What’ your weight?” e “What’ your height?”, deve-se utilizar o pacote readline-sync.
// Solução
// Instale o pacote readline-sync: npm i readline-sync
// Importe o readline-sync no arquivo bmi.js e substitua os valores das variáveis weight e height por perguntas à pessoa que executou o script. Utilizaremos o método questionInt do pacote readline-sync: 

// 4 - 🚀 Agora temos um problema, o peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
// O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre a função adequada para realizar input de valores float.
// Encontrou a função? Show! Agora utilize-a para solicitar o input de weight.
// Obs. Da forma como está, ao inserirmos um valor como 60.99 para o peso, ele é transformado no número inteiro 60, comprometendo o resultado.
// Solução
// Encontre, na documentação do readline-sync, a função questionFloat;
// Altere o código da função main para que em vez de questionInt, passe a utilizar a função questionFloat ao solicitar o peso da pessoa:

// 5 - 🚀 Vamos sofisticar um pouco mais nosso exercício. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra:
// Considere a seguinte tabela para classificar a situação do IMC:
// IMC 	Situação
// Abaixo de 18,5 	Abaixo do peso (magreza)
// Entre 18,5 e 24,9 	Peso normal
// Entre 25,0 e 29,9 	Acima do peso (sobrepeso)
// Entre 30,0 e 34,9 	Obesidade grau I
// Entre 35,0 e 39,9 	Obesidade grau II
// 40,0 e acima 	Obesidade graus III e IV
// Solução
// Aqui nós temos a opção de fazer uma série de verificações com if, para saber em que situação se encontra o IMC calculado. Porém, a utilização de muitos ifs pode aumentar bastante a complexidade ciclomática do código. Sendo assim, resolveremos de outra maneira. Mas, a título de exemplo, a solução com if seria a inclusão de um código como esse:

// ...
// Considerando que nesse trecho temos o valor do IMC na variável "imc"


const readline = require('readline-sync');

// const PESO_KG = 80;
// const ALTURA_CM = 178;

function calculadoraIMC(peso, altura) {
    console.log(`Peso: ${peso}, Altura: ${altura}`);

    const alturaEmMetros = altura / 100;
    const alturaAoQuadrado = alturaEmMetros ** 2; // eleva ao quadrado

    const imc = peso / alturaAoQuadrado;

    return imc;
}

const IMC_MAXIMO_E_MINIMO_POR_SITUACAO = {
    'Abaixo do peso (magreza)' : {
      imcMaximo: 18.5,
    },
    'Peso normal': {
      imcMinimo: 18.5,
      imcMaximo: 25,
    },
    'Acima do peso (sobrepeso)': {
      imcMinimo: 25,
      imcMaximo: 29.9,
    },
    'Obesidade grau I': {
      imcMinimo: 30,
      imcMaximo: 34.9,
    },
    'Obesidade grau II' : {
      imcMinimo: 35,
      imcMaximo: 39.9,
    },
    'Obesidade graus III e IV': {
      imcMinimo: 40,
    }
}

function calculaSituacao(imc) {
  const situacoes = Object.keys(IMC_MAXIMO_E_MINIMO_POR_SITUACAO);

  const situacaoEncontrada = situacoes.find((situacao) => {
    const {imcMaximo, imcMinimo} = IMC_MAXIMO_E_MINIMO_POR_SITUACAO[situacao];
    const dentroDoMinimo = imcMinimo ? imc > imcMinimo : true;
    const dentroDOMaximo = imcMaximo ? imc < imcMaximo : true;

    return dentroDOMaximo && dentroDoMinimo;
  });

  return situacaoEncontrada;
}

// A função main é o ponto de partida do nosso programa
function main() {
    // const imc = calculadoraIMC(PESO_KG, ALTURA_CM);
    // const peso = readline.questionInt('Qual o seu peso? (em kg)');
    const peso = readline.questionFloat('Qual o seu peso? (em kg)');
    const altura = readline.questionInt('Qual a sua altura? (em cm)');

    const imc = calculadoraIMC(peso, altura);
    const situacao = calculaSituacao(imc);

    console.log(`IMC: ${imc.toFixed(2)}`);
    console.log(`Situação: ${situacao}`);
}

main();

