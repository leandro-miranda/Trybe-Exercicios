import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import registersReducer from './registersReducer';

const rootReducers = combineReducers({loginReducer, registersReducer});

export default rootReducers;