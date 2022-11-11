// 🚀 Exercício 3: Crie uma interface que representará uma pessoa funcionária.
// `Interface`: Employee
// `Attributes`:
//     - registration: número do registro
//     - salary: valor do salário
//     - admissionDate: data de admissão
// `Methods`:
//     - generateRegistration: retorna uma string única gerada como registro

import Person from "./Person";
import Enrollable from "./Enrollable";
export default interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string;
}