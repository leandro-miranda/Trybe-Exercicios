import { REGISTER_COSTUMER } from '../actions/types';

const INITIAL_STATE = [];

function registersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_COSTUMER:
      const lastIndex = state.length - 1
      const lastCostumerId = lastIndex < 0 ? 0 : state[lastIndex].id;
      return [
        ...state,
        {
          ...action.payload.costumerData,
          id: lastCostumerId + 1
        }
      ];
      default:
        return state;
  }
}

export default registersReducer;
