// `Class`: Teacher
// `Extends`: Employee
// `Attributes`:
//     - subject: a disciplina lecionada pela pessoa professora
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - O salário não pode ser negativo.
//     - A data de admissão não pode ser no futuro

import Subject from "./Subject";
import Employee from "./Employee";

export default class Teacher extends Employee {
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate, salary);

    this._subject = subject;
    this.enrollment = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  generateRegistration(): string {
      const randomSts = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

      return `PRF${randomSts}`;
  }
}
