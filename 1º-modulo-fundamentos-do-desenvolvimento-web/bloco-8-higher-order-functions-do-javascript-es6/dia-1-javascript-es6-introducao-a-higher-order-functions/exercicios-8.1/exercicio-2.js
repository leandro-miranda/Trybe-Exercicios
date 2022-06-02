// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou")

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(myNumber, number) ? 'Tente novamente!' : 'Parabéns você ganhou!';
};

console.log(lotteryResult(3, numberChecker));

// O uso do ? e :, é um tipo de validação é conhecido como "operador ternário" e é uma alternativa para se realizar uma validação if, else onde ? é equivalente ao if e : ao else. Desta forma, o que está acontecendo é: O retorno da função numberChecker é verdadeiro ? se sim retorne 'Tente novamente!', se não :, retorne 'Parabéns você ganhou!'.
