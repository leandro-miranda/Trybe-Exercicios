// crie uma função que retorne a string 'Acordando!!'
const wakeUp = () => "Acordando!!";

// crie uma função que retorne a string 'Bora tomar café!!
const coffee = () => "Bora tomar café!!";

// crie uma função que retorne a string 'Partiu Dormir!!'
const sleep = () => "Partiu Dormir!!";

// Agora desenvolva uma _HOF_ chamada `doingThings` e configure esta função
// para que imprima no console o resultado da execução das funções que você
// criou nos exemplos anteriores.

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
};

doingThings(wakeUp);
doingThings(coffee);
doingThings(sleep);
