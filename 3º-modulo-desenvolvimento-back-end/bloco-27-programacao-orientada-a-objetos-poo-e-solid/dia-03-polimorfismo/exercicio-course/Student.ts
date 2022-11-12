// 🚀 Exercício 2: Notamos também que tanto nossa classe de pessoa estudante quanto a classe de pessoa professora possuem um método parecido, que retorna uma string única gerada para servir de identificador daquele tipo de pessoa (respectivamente, a matrícula e o registro). Para termos mais reuso de código e adequar melhor nosso sistema à POO:
// A: Transforme nossa interface de pessoa funcionária em uma classe de pessoa funcionária que herda da nossa classe pessoa.
// B: Faça com que nossa classe de pessoa professora herde da classe de pessoa funcionária.
// C: Por último crie uma nova interface que será implementada por nossas classes pessoa estudante e pessoa funcionária que dirá que a instância delas deve ser matriculável.
// Nossa nova modelagem para esses componentes ficará assim:
// `Class`: Student
// `Extends`: Person
// `Implements`: Enrollable
// `Attributes`:
//     - examsGrades: notas de provas
//     - worksGrades: notas de trabalhos
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento e preencher a matrícula automaticamente
//     - sumGrades: retorna a soma das notas da pessoa estudante
//     - sumAverageGrade: retorna a média das notas da pessoa estudante
// `Validations`:
//     - A matrícula deve possuir no mínimo 16 caracteres
//     - A pessoa estudante deve possuir no máximo 4 notas de provas
//     - A pessoa estudante deve possuir no máximo 2 nostas de trabalhos


import Person from "./Person";
import Enrollable from "./Enrollable";

export default class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this.enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  //esse método checa se a inscrição da pessoa estudante possui no mínimo 16 caracteres
  set enrollment(enrollment: string) {
    if (enrollment.length < 16) throw new Error("A matrícula deve possuir no mínimo 16 caracteres");

    this._enrollment = enrollment;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(examsGrades: number[]) {
    if (examsGrades.length > 4) throw new Error("A pessoa estudante deve possuir no máximo 4 notas de provas");

    this._examsGrades = examsGrades;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(worksGrades: number[]) {
    if (worksGrades.length > 2) throw new Error("A pessoa estudante deve possuir no máximo 2 notas de trabalhos");

    this._worksGrades = worksGrades;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades]
      .reduce((previousNote, note) => note + previousNote, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sumGrades / divider);
  }

  //esse método gera um id de inscrição aleatório baseado na data de cadastro da pessoa estudante
  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
}