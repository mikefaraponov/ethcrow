import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import prop from 'ramda/src/prop';
import {auth, provider} from 'utils/firebase';
import {compose} from 'redux';
import {setLoading} from 'actions/loading';
import {removeCurrentUser} from 'utils/storage';

export const SIGN_OUT = 'SIGN_OUT';
export const SIGN_OUT_SUCESS = 'SIGN_OUT_SUCESS';
export const SIGN_OUT_ERROR = 'SIGN_OUT_ERROR';

/**
 * [signOutUserSuccess description]
 * @return {[type]} [description]
 */
export function signOutUserSuccess() {
  return {
    type: SIGN_OUT_SUCESS,
  };
}

/**
 * [signOutUserError description]
 * @return {[type]} [description]
 */
export function signOutUserError() {
  return {
    type: SIGN_OUT_ERROR,
    payload: err,
    error: true,
  };
}

/**
 * [signOutListener description]
 * @return {[type]} [description]
 */
export function signOutListener() {
  return (dispatch, getState) => {
    if (getState().session.currentUser) {
      removeCurrentUser();
      dispatch(signOutUserSuccess());
    }
  }
}

/**
 * [signOutUser description]
 * @param  {[type]} _        [description]
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
export function signOutUser() {
  return (dispatch, getState) => {
    auth.signOut().catch(compose(dispatch, signOutUserError));
  }
}
