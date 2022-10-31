// A primeira função que vamos desenvolver recebe um nome e o imprime na tela com o texto “Olá Nome”.
export function greeter(name: string):string {
  return `Olá ${name}!`;
}

// A segunda função que vamos desenvolver irá mostrar na tela o nome da pessoa e sua idade.
export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos.`;
}

// A terceira função que vamos desenvolver fará a adição de todos os números que estão dentro de um array. Para isso, faremos uma função add que será chamada dentro da função sumArray, que por sua vez utilizará o método reduce para realizar a soma dos valores.
export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

// A quarta função que vamos desenvolver será para calcular a área de um triângulo. A fórmula para isso é multiplicar a medida da base pela medida da altura e dividir o resultado por dois.
export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

// A quinta função que vamos desenvolver será para calcular a área de um quadrado. Para calcular isso, multiplicamos a medida da base pela medida da altura. Como as medidas são as mesmas, multiplicá-las é o mesmo que elevar uma delas ao quadrado.
export function square(side: number): number {
  return side ** 2;
}

// A última função que vamos desenvolver será para calcular a área de um retângulo. A área do retângulo é dada pela multiplicação da base pela altura.
export function rectangle(base: number, height: number): number {
  return base * height;
}

// Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. (D * d) / 2
export function rhombus(D:number, d:number):number {
  return (d * D) / 2
}

// Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. ((B + b) * h) / 2
export function trapezoid(B:number, b:number, h:number):number {
  return ((B + b) * h) / 2
}

// Crie uma nova função para calcular a área de um círculo. A área do círculo de raio r é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14). ℼ * r²
export function circle(radius:number):number {
  const PI:number = 3.14;
  return PI * radius ** 2
}

//ENUM
// Crie uma Enum que represente os dias da semana. Seu valor deve ser número do dia
enum DaysOfWeek {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

// Crie uma Enum que represente as cores do arco-íris. Seu valor deve ser o nome das cores em português.
enum RainbowColors {
  Red = 'Vermelho',
  Orange = 'Laranja',
  Yellow = 'Amarelo',
  Green = 'Verde',
  Blue = 'Azul',
  Indigo = 'Anil',
  Violet = 'Violeta',
}