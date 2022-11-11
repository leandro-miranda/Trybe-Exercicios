// Suponha que você está modelando os personagens do jogo de luta multijogadores Super Smash Bros. No jogo, há personagens de alcances variados e movimentos especiais variados. Vence a pessoa que acumulou mais pontos na partida.

// Crie uma classe abstrata Character que tenha os métodos abstratos talk(): void e specialMove(): void.
// Crie a classe concreta MeleeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
// Crie a classe concreta LongRangeCharacter que estenda Character e sobrescreva os métodos abstratos dessa classe.
// Crie uma função que receba como parâmetro character: Character e chame os métodos talk e specialMove para apresentar o personagem.

abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void;
}

class MelleCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(`Hi, I'm ${this._name}. I attack at close range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
    console.log(this._specialMoveName)
  }
}

class LongRangeCharacter extends Character {
  constructor(private _name: string, private _specialMoveName: string) {
    super();
  }
  talk(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(`Hi, I'm ${this._name}. I attack at long range.`);
  }

  specialMove(): void {
    /* Entra aqui uma implementação exclusiva para os personagens de longo alcance */
    console.log(this._specialMoveName)
  }
}

function showCharacter(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MelleCharacter('Yoshi', 'Super dragon');
const samus = new LongRangeCharacter('Samus', 'Zero Laser');

showCharacter(yoshi);
showCharacter(samus);