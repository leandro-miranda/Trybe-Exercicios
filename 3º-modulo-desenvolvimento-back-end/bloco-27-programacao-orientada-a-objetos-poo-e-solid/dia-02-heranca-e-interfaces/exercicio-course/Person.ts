// 🚀 Exercício 1: Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

export default class Person {
  constructor(private _name: string, private _birthDate: Date) {
    this.name = _name
    this.birthDate = _birthDate
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value
  }

  get birthDate(): Date {
    return this._birthDate
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime()); // diferença em milissegundos
    const yearMs = 31_536_000_000; // milissegundos em um ano
    return Math.floor(diff / yearMs);
  }

  private validateName(name: string): void {
    if (name.length < 3) throw new Error("Nome deve ter no mínimo 3 caracteres");
  }

  private validateBirthDate(birthDate: Date): void {
    if (birthDate.getTime() > new Date().getTime()) throw new Error("Data de nascimento não pode ser no futuro");
    if (Person.getAge(birthDate) > 120) throw new Error("A pessoa não pode ter mais de 120 anos");
  }
}