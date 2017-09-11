import {SET_LOADING} from 'constants/action-types';

const initialState = window.localStorage;

export default function localStorage(state=initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
