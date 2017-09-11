import {SET_LOADING} from 'constants/action-types';

const initialState = {};

export default function loading(state=initialState, action) {
  const {type, payload} = action;
  if (type === SET_LOADING) {
    return Object.assign({}, state, {
      [`${payload.scope || 'global'}Loading`]: payload.loading,
    });
  } else {
    return state;
  }
}
