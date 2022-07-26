import { LOGIN } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userData: action.payload,
      }
      default:
        return state;
  }
}

export default loginReducer;