import Person from "./Person";

const leandro = new Person("Leandro Miranda", new Date("1983/07/25"));
const maisa = new Person("Maisa Miranda", new Date("1989/11/29"));

console.log(leandro);
console.log(maisa);

// const invalidPersonName = new Person("Le", new Date("1983/07/25"));
// const invalidPersonBirthDate = new Person("Leandro Miranda", new Date("1900/07/25"));

// console.log(invalidPersonName);
// console.log(invalidPersonBirthDate);
