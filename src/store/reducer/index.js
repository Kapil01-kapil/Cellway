import {combineReducers} from 'redux';
import {saveUser} from './SaveUser';

const rootReducer = combineReducers({
  saveUser,
});

export default rootReducer;
