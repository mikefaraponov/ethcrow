import firebase from 'utils/firebase';

const provider = new firebase.auth.GoogleAuthProvider();

const scope = 'https://www.googleapis.com/auth/contacts.readonly';

provider.addScope(scope);

export const signUp = () => (dispatch) => {
  firebase.auth()
    .signInWithRedirect(provider);
}

export const signOut = () => (dispatch) => {
  firebase.auth()
    .signOut()
    .then(dispatch)
    .catch(dispatch);
}

export const unlink = () => (dispatch) => {
  const {currentUser} = firebase.auth();
  currentUser.delete()
    .then(dispatch)
    .catch(dispatch);
}

