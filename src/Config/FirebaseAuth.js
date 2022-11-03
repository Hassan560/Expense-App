import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'

import firebaseConfig from './Firebase'

firebase.initializeApp(firebaseConfig)

// sign up and login auth
const auth = firebase.auth()

// google auth
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// facebook auth
const fbAuthProvider = new firebase.auth.FacebookAuthProvider();

// database
// const db = firebase.firestore

export { auth, googleAuthProvider, fbAuthProvider }