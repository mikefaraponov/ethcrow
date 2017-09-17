import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import prop from 'ramda/src/prop';
import {auth, provider} from 'utils/firebase';
import {compose} from 'redux';
import {setLoading} from 'actions/loading';

export const UNLINK = 'UNLINK';
export const UNLINK_SUCCESS = 'UNLINK_SUCCESS';
export const UNLINK_ERROR = 'UNLINK_ERROR';

/**
 * [unlinkUserSuccess description]
 * @return {[type]} [description]
 */
export function unlinkUserSuccess() {
  return {type: UNLINK_SUCCESS};
}
/**
 * [unlinkUserError description]
 * @param  {[type]} err [description]
 * @return {[type]}     [description]
 */
export function unlinkUserError(err) {
  return {
    type: UNLINK_ERROR,
    payload: err,
    error: true,
  };
}
/**
 * [unlinkUser description]
 * @param  {[type]} dispatch [description]
 * @return {[type]}          [description]
 */
export function unlinkUser(dispatch) {
  return (dispatch) => {
    auth.currentUser.delete()
      .then(compose(dispatch, unlinkUserSuccess))
      .then(removeCurrentUser)
      .catch(compose(dispatch, unlinkUserError));
  }
};
