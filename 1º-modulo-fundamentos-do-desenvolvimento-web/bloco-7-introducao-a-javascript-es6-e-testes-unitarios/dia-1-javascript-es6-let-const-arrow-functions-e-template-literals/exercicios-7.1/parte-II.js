// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
};
console.log(factorial(10));

// recursiva
const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);
console.log(factorial(10));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
};
console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Longestword com sort em uma linha.
const longestWord = (text) => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
// Função 2: Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string.
// Exemplo:
// "Tryber x aqui!
// Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ...
// #goTrybe".
const array = ['Android', 'iOS', 'Architecture', 'Teach', 'Run'];

function buildSkillsPhrase(paramOne) {
  const fun1 = (paramInner) => (
    `Tryber ${paramInner} aqui!

    Tudo bem?`
  );

  let result = `${fun1(paramOne)}

  Minhas cinco principais habilidades são:`;

  array.forEach((skill, index) => result = `${result}

    - ${skill}`);

  result = `
    ${result}

    #goTrybe
    `;

  return result;
}

console.log(buildSkillsPhrase('Lucas'));
