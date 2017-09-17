import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import prop from 'ramda/src/prop';
import {auth, provider} from 'utils/firebase';
import {compose} from 'redux';
import {setLoading} from 'actions/loading';

export const SUBSCRIBE = 'SUBSCRIBE';
export const SUBSCRIBE_SUCCESS = 'SUBSCRIBE_SUCCESS';
export const SUBSCRIBE_ERROR = 'SUBSCRIBE_ERROR';

export function subscribeEmail() {
  return (dispatch) => {
    dispatch(subscribeEmailStart());
    Promise.resolve()
      .then(() => dispatch(subscribeEmailSuccess()))
      .catch((err) => dispatch(subscribeEmailError(details)));
  }
}

export function subscribeEmailStart() {
  return {
    type: SUBSCRIBE,
  }
}

export function subscribeEmailSuccess() {
  return {
    type: SUBSCRIBE_SUCCESS,
  }
}

export function subscribeEmailError(details) {
  return {
    type: SUBSCRIBE_ERROR,
    error: true,
    payload: details,
  };
}
