import PizzaComum from "./PizzaComun";
import PizzaVegetariana from "./PizzaVegetariana";
import PizzaDoce from "./PizzaDoce";

const calabresa: PizzaComum = {
  flavor: "Calabresa",
  slices: 6,
}

console.log(calabresa);

const frango: PizzaComum = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaComum = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetariana = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetariana = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaDoce = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);