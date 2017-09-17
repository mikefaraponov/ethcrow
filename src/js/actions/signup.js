import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import prop from 'ramda/src/prop';
import {auth, provider} from 'utils/firebase';
import {compose} from 'redux';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const SIGN_UP_SUCCESS = 'SIGN_UP_ERROR';

/**
 * [description]
 * @param  {[type]} ) [description]
 * @return {[type]}   [description]
 */
export const signUpUser = () => (dispatch) => {
  dispatch(signUpUserBegin());
  auth.signInWithRedirect(provider)
    .catch(compose(dispatch, signUpUserError));
};

/**
 * [parseRedirectResult description]
 * @return {[type]} [description]
 */
export function parseRedirectResult() {
  return (dispatch) => auth.getRedirectResult()
    .catch(compose(dispatch, signUpUserError));
}

export function signUpHandler(user) {
  return (dispatch, getState) => {
    const {session} = getState();
    if (!session.currentUser || web3.version.network !== session.network
    ) {
      const addToBlockChainIfFirstTime = (isFirstTime) => {
        if (isFirstTime) {
          // generate and
          // add to firebase private key
          // add to blockchain uid and public key
          return contract.addToBlockChain(uid);
        }
      }
      contract.hasUid(user.uid)
        .then(addToBlockChainIfFirstTime)
        .then(() => dispatch(signUpUserSuccess(user))
        .catch();
    } else {
      dispatch(signUpUserSuccess(user));
    }
  };
}

export function signUpUserBegin() {
  return {
    type: SIGN_UP_BEGIN,
  }
}

export function signUpUserSuccess(user) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user,
  }
}

export function signUpUserError(err) {
  return {
    type: SIGN_UP_ERROR,
    payload: err,
    error: true,
  };
}
