import Pizza from "./Pizza";
import { Comum } from "./PizzaFlavorsTypes";

interface PizzaComum extends Pizza {
  flavor: Comum
}

export default PizzaComum;