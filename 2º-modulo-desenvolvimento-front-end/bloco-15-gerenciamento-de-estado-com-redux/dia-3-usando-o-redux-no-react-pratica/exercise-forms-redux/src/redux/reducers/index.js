import { combineReducers } from 'redux';
import personalDataReducer from './personalDataReducer';
import professionalDataReducer from './professionalDataReducer';

const rootReducer = combineReducers({
  personalDataReducer,
  professionalDataReducer,
});

export default rootReducer;
