import { combineReducers } from 'redux';
import reducerPersonal from './reducerPersonal';
import reducerProfissional from './reducerProfessional';

const rootReducer = combineReducers({
  reducerPersonal,
  reducerProfissional,
});

export default rootReducer;
