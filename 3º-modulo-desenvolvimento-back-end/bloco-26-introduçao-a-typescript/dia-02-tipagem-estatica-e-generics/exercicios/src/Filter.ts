// Recebe como primeiro parâmetro um array que pode ser de qualquer tipo;
// Recebe como segundo parâmetro uma função de callback;
// Retorna um novo array removendo os itens que não atendem a condição da função de callback;
// A função de callback recebe como primeiro parâmetro um item do tipo do array;
// A função de callback pode receber como segundo parâmetro um index do tipo inteiro;
// A função de callback pode receber como terceiro parâmetro o próprio array;
// A função de callback devolve um booleano.

type callbackFilter<T> = (value: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], callback: callbackFilter<T>): T[] {
  const newArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(myFilter([1, 2, 3], (item, _index, _array) => item < 3));

console.log(myFilter(["a", "b", "c"], (item, _index, _array) => {
  return item !== "a"
}));
