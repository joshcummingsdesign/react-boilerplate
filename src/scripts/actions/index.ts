import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { Action, Image } from '../types';
import * as constants from '../constants';

export interface SetSearchTermAction extends Action<constants.SET_SEARCH_TERM, string> {}

export function setSearchTerm(searchTerm: string): SetSearchTermAction {
  return { type: constants.SET_SEARCH_TERM, payload: searchTerm };
}

export interface AddApiDataAction extends Action<constants.ADD_API_DATA, Image> {}

export function addApiData(apiData: Image): AddApiDataAction {
  return { type: constants.ADD_API_DATA, payload: apiData };
}

export function getApiDataThunk(id: number): ThunkAction<void, null, null, null> {
  return (dispatch: Dispatch<AddApiDataAction>) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => {
        dispatch(addApiData(response.data));
      })
      // tslint:disable-next-line:no-console
      .catch(error => console.error('axios error', error));
  };
}
