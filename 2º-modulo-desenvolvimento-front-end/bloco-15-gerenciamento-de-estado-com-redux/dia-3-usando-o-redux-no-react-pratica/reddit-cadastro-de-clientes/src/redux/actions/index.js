import { REGISTER_COSTUMER, LOGIN, DELETE_COSTUMER } from './types';

export const registerCostumer = (costumerData) => ({
  type: REGISTER_COSTUMER,
  payload: {costumerData},
});

export const login = (userData) => ({
  type: LOGIN,
  payload: {userData}
});

export const deleteCostumer = (costumerId) => ({
  type: DELETE_COSTUMER,
  payload: {costumerId}
});