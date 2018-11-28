import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from '../constants';
import { SetSearchTermAction, AddApiDataAction } from '../actions';

const searchTerm = (state = '', action: SetSearchTermAction) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiData = (state = {}, action: AddApiDataAction) => {
  if (action.type === ADD_API_DATA) {
    return { ...state, [action.payload.id]: action.payload };
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
