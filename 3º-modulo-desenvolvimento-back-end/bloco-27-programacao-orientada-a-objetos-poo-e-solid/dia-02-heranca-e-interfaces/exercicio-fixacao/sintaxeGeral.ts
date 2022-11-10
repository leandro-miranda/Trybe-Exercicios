// Crie uma classe chamada _Superclass_.
class Superclass {
  // A _Superclass_ deve possuir um atributo público _isSuper_.
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }
// A _Superclass_ deve possuir um método público chamado `sayHello`, que deve imprimir "Olá mundo!".
  public sayHello(): void {
    console.log('Olá mundo!');
  }
 // Mude a visibilidade do método `sayHello` de _public_ para _protected_.
  // protected sayHello(): void {
  //   console.log('Olá mundo!');
  // }
}
// Crie uma classe chamada _Subclass_ que herda da _Superclass_.
class Subclass extends Superclass {
  // Crie, na _Subclass_, um método público chamado `sayHello2`. 
  // public sayHello2(): void {
    // Chame o método `sayHello` dentro do método `sayHello2`.
    // this.sayHello();
    
  // }
  // No construtor da _Subclass_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
  constructor() {
    super();
    this.isSuper = false;
  }
}
// Crie uma função `myFunc` fora do escopo da _Subclass_ que recebe um objeto da _Superclass_.
// Faça a função receber não mais um objeto da _Superclass_, mas sim da _Subclass_.
const myFunc = (object: Superclass) => {
  // Dentro dessa função, chame o método `sayHello` do objeto passado como parâmetro.
  // Ao mudar a visibilidade, o compilador (ou o vs code) vai mostrar um erro. Conserte esse erro utilizando o novo método `sayHello2`.
  object.sayHello();
  // Dentro da função que recebe um objeto da _Superclass_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
  console.log(object.isSuper ? 'Super!' : 'Sub!');
  // object.sayHello2();
}
// Crie um objeto da _Superclass_ e outro da _Subclass_.
// Comente a criação da instância da Superclass
const sup = new Superclass();
const sub = new Subclass();
// Chame a função `myFunc` 2 vezes, passando os objetos criados.
// Comente a chamada da função que possui o objeto do tipo Superclass como parâmetro.
myFunc(sup);
myFunc(sub);
// Mude a visibilidade do método `sayHello` de _protected_ para _private_. O que acontece?
// Ao mudar a visibilidade de _protected_ para _private_, o método `sayHello2` da _Subclass_ deixa de poder acessar o método `sayHello` definido na _Superclass_. Isso acontece pois um método privado só pode ser acessado na classe que o define.