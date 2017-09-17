import {auth} from 'utils/firebase';
import {session} from 'actions';
import ifElse from 'ramda/src/ifElse';
import is from 'ramda/src/is';
import {compose} from 'redux';

// const isObject = is(Object);
// const signIn = compose(session.signInSuccess, session.setCurrentUser);
// const signOut = compose(session.signOutSuccess, session.removeCurrentUser);

export function authStatus({dispatch}) {
  let unsubscribe;

  const signUp = compose(dispatch, signUpHandler);
  const signOut = compose(dispatch, signOutHandler);
  const onAuthChange = ifElse(is(Object), signUp, signOut);

  return (next) => (action) => {
    next(action);
    if (action.type === ON_AUTH_STATE_CHANGE_LISTEN_START) {
      unsubscribe = auth.onAuthStateChanged(onAuthChange);
    } else if (action.type === ON_AUTH_STATE_CHANGE_LISTEN_END) {
      unsubscribe();
    }
  }
}

export default authStatus;
