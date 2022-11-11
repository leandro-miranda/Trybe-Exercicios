// 🚀 Exercício 4: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
// `Class`: Subject
// `Attributes`:
//     - name: nome da disciplina
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome
// `Validations`:
//     - O nome tem que possuir no mínimo 3 caracteres]

export default class Subject {
  constructor(private _name: string) {
    this.name = _name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error("O nome da disciplina deve ter no mínimo 3 caracteres.");
  }
}