import Person from "./Person";
import Student from "./Student";
import Employee from "./Employee";
import Subject from "./Subject";
import Teacher from "./Teacher";

const leandro = new Person("Leandro Miranda", new Date("1983/07/25"));
const maisa = new Person("Maisa Miranda", new Date("1989/11/29"));

console.log(leandro);
console.log(maisa);

// const invalidPersonName = new Person("Le", new Date("1983/07/25"));
// const invalidPersonBirthDate = new Person("Leandro Miranda", new Date("1900/07/25"));

// console.log(invalidPersonName);
// console.log(invalidPersonBirthDate);

const studentLeandro = new Student("Leandro Miranda", new Date("1983/07/25"));
const studentMaisa = new Student("Maisa Miranda", new Date("1989/11/29"));
const studentOsvaldo = new Student("Osvaldo Nogueira", new Date("2004/06/06"));
const studentMariaFernanda = new Student("Maria Fernanda Sousa", new Date("2005/08/08"));
const studentMariaAlice = new Student("Maria Alice Salgueiro", new Date("2007/10/11"));

studentLeandro.examsGrades = [10, 9, 8, 7];
studentMaisa.examsGrades = [10, 9, 8, 7];
studentOsvaldo.worksGrades = [10, 9];
studentMariaFernanda.worksGrades = [10, 8];
// studentMariaAlice.worksGrades = [10, 9, 7]; gera um erro

console.log(studentLeandro);
console.log(studentMaisa);
console.log(studentOsvaldo);
console.log(studentMariaFernanda);
console.log(studentMariaAlice);

const testInterfaceEmployee: Employee = {
  registration: "FNC1234567891011",
  salary: 3500.00,
  admissionDate: new Date(),

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `FNC${randomStr}`;
  },
};

console.log(testInterfaceEmployee);

const math = new Subject("Matemática");
const story = new Subject("História");
const philosophy = new Subject("Filosofia");

const marta = new Teacher("Marta", new Date('1980/03/30'), 3500, math);
const joao = new Teacher("João", new Date('1982/04/21'), 3500, story);
const maria = new Teacher("Maria", new Date('1986/01/29'), 3500, philosophy);

console.log(math);
console.log(story);
console.log(philosophy);

console.log(marta);
console.log(joao);
console.log(maria);


// gera um erro
// const invalidSubjectName = new Subject("M");
// console.log(invalidSubjectName);



