import { combineReducers } from 'redux';
// import activityReducer from './activity';
// import nameReducer from './name';
import catReducer from './cats';

export default combineReducers({ cats: catReducer });