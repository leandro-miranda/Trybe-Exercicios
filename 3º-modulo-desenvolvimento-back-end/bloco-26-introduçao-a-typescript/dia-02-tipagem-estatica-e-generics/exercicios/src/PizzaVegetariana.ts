import Pizza from "./Pizza";
import { Vegetariana } from "./PizzaFlavorsTypes";

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariana
}

export default PizzaVegetariana;