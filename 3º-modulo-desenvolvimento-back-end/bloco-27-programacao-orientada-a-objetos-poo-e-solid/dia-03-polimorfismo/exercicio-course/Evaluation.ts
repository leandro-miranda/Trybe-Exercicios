// Exercício 3: Vamos agora melhorar um pouco nossa classe de pessoa estudante. Para isso vamos criar uma nova classe cujas as instâncias representam as avaliações aplicadas pela escola e a nossa pessoa estudante agora passará a ter como propriedade uma unica lista que carrega os resultados das avaliações que ela realizou. A nossa classe avaliações conterá a pontuação da avaliação, a pessoa professora e o tipo de avaliação. A nossa classe de resultado de avaliação conterá a avaliação e a nota da pessoa estudante.
// `Class`: Evaluation
// `Attributes`:
//     - score: nota da avaliação
//     - teacher: pessoa professora
//     - type: tipo da avaliação
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a pontuação, a pessoa professora e o tipo
// `Validations`:
//     - O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"
//     - A pontuação não pode ser negativa
//     - A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos
//     - A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos
import Teacher from "./Teacher";

export default class Evaluation {
  private _teacher: Teacher;

  constructor(
    private _score: number,
    private _type: string,
    teacher: Teacher
  ) {
    this._teacher = teacher;
    this.type = _type;
    this.score = _score; 
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error('A pontuação deve ser positiva');

    if (this.type === 'prova' && value > 25) throw new Error('A pontuação não pode passar de 25 pontos');

    if (this.type === 'trabalho' && value > 50) throw new Error('A pontuação não pode passar de 50 pontos');

    this._score = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    if (value !== 'prova' && value !== 'trabalho') throw new Error('O tipo da avaliação deve ser "prova" ou "trabalho"');

    this._type = value;
    // ou
    // set type(value: string) {
      // if (!['prova', 'trabalho'].includes(value)) throw new Error('O tipo da avaliação deve ser "prova" ou "trabalho"');
    //}
  }
}