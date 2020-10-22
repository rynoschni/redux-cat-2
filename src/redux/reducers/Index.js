import { combineReducers } from 'redux';
import activityReducer from './activity';
import nameReducer from './name';

export default combineReducers({ name: nameReducer, activity: activityReducer });