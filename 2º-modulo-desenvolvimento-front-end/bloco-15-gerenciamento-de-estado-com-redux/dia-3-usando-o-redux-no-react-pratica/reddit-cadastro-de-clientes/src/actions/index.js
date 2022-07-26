import { REGISTER_COSTUMER, LOGIN } from "./types";

export const registerCostumer = (costumerData) => ({
  type: REGISTER_COSTUMER,
  payload: {costumerData},
});

export const login = (userData) => ({
  type: LOGIN,
  payload: {userData}
});