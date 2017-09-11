import firebase from 'firebase';

firebase.initializeApp(process.env.FIREBASE_CONFIG);

export default firebase;
