// Crie uma classe chamada Tv, com os atributos:
// brand: marca da TV;
// size: tamanho em polegadas;
// resolution: resolução da tela;
// connections: conexões disponíveis(HDMI, Ethernet, etc.);
// connectedTo: conexão atual Este atributo não precisa ser inicializado no construtor.
// Dentro da classe Tv, crie o método turnOn, que imprimirá os atributos inicializados no construtor.

// Instancie um objeto a partir da classe Tv, chame o método turnOn para imprimir seus atributos.

// Altere a visibilidade dos atributos definidos na classe Tv para private.

// Crie um método getter e um setter para o atributo _connectedTo, da classe Tv.

// O setter deverá verificar se o valor definido está entre as conexões disponíveis (_connections) e:
// Em caso positivo, definir este valor para o atributo _connectedTo;
// Em caso negativo, imprimir no console a mensagem “Sorry, connection unavailable!”
// Defina um valor para o atributo _connectedTo por meio do método setter criado e imprima seu valor.

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string | undefined;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn(): void {
    console.log(`Tv ${this._brand}, ${this._size}, ${this._resolution} \n\
    avaliable connections: ${this._connections}`,);
  }

  get connectedTo(): string | undefined {
    return this._connectedTo;
  }

  set connectedTo(value: string | undefined) {
    // permite setar undefined ou uma conexão que esteja no `connections`
    if (!value || this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
    } else {
      console.log('Sorry, connection unavailable!');
    }
  }
}

const tv1 = new Tv('Samsung', 55, '4K', ['HDMI', 'USB', 'VGA']);
tv1.turnOn();
// tv1.connectedTo = 'Wi-Fi';
tv1.connectedTo = 'HDMI';
console.log('Connected to:', tv1.connectedTo);

// --------------------------------------------------------------------------------------------------------------------------------------------------

class Person {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

// esta sintaxe permite acessar o valor retornado via person.getWeight()
  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42
// mesmo que esteja ocorrendo uma validação internamente
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const p1 = new Person('Maria', 171, 58, 19);
const p2 = new Person('João', 175, 66, 18);

// Alteração direta de variável pública
p1.name = 'Mariah';
// Acesso direto a variável pública
console.log(p1.name);
// Acesso a método público que manipula atributo privado
console.log(p1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(p2.age);
// Acesso a método público que manipula atributo privado
p2.birthday();
console.log(p2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
p2.age = 17;
console.log(p2.age);
// Leitura de atributo readonly
console.log(p1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/
// A idade da pessoa p2 continua 17, pois a validação no set age impede que existam pessoas com 300 anos de idade. Esse é o poder do encapsulamento.
p2.age = 300;
console.log(p2.age);
// Saída: 17