import {SIGN_UP_SUCCESS, SIGN_UP_ERROR} from 'actions/signup';
import {UNLINK_SUCCESS, UNLINK_ERROR} from 'actions/unlink';
import {SIGN_OUT_SUCCESS, SIGN_OUT_ERROR} from 'actions/signout';

try {
  var currentUser = JSON.parse(localStorage.currentUser);
} catch(e) {
  currentUser = null;
}

const initialState = {
  currentUser,
  error: '',
};

export default function session(state=initialState, action) {
  switch (action.type) {
    case SIGN_UP_SUCCESS: return {
      currentUser: payload,
      error: '',
    };
    case SIGN_UP_ERROR: return {
      currentUser: null,
      error: payload.message,
    };
    case SIGN_OUT_SUCCESS: return {
      currentUser: null,
      error: '',
    };
    case SIGN_OUT_ERROR: return {
      currentUser: null,
      error: payload.message,
    };
    case UNLINK_SUCCESS: return {
      currentUser: null,
      error: '',
    };
    case UNLINK_ERROR: return {
      currentUser: null,
      error: payload.message,
    };
    default:
      return state;
  }
}
