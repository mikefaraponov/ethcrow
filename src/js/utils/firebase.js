import firebase from 'firebase';

firebase.initializeApp(process.env.FIREBASE_CONFIG);

export const auth = firebase.auth();

window.auth = auth;

export const db = firebase.database();

window.db = db;

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

const scope = 'https://www.googleapis.com/auth/contacts.readonly';

googleAuthProvider.addScope(scope);

export const provider = googleAuthProvider;
