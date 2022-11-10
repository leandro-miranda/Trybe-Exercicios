import Person from "./Person";
import Student from "./Student";

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
