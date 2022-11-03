import ActionTypes from "../Constants";

import { auth, googleAuthProvider, fbAuthProvider } from "../../Config/FirebaseAuth";

const { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_SIGN_IN, FACEBOOK_SIGN_IN } = ActionTypes


export const signUp = (user) => {
    auth.createUserWithEmailAndPassword(user.email, user.password).then(({ user }) => {
        console.log(user)
    }).catch((error) => {
        alert(error)
    })
    return (dispatch) => {
        dispatch({
            type: SIGN_UP,
            payload: user
        })
    }
}

export const signIn = (user) => {
    auth.signInWithEmailAndPassword(user.email, user.password).then(({ user }) => {
        console.log(user);
    }).catch((error) => {
        alert(error);
    })
    return (dispatch) => {
        dispatch({
            type: SIGN_IN,
            payload: user
        })
    }
}

export const googleSignIn = (user) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
        console.log(user);
    }).catch((error) => {
        alert(error)
    })
    return (dispatch) => {
        dispatch({
            type: GOOGLE_SIGN_IN,
            payload: user
        })
    }
}

export const facebookSignIn = (user) => {
    fbAuthProvider()
    return (dispatch) => {
        dispatch({
            type: FACEBOOK_SIGN_IN,
            payload: user
        })
    }
}

export const signOut = () => {
    auth.signOut().then((result) => {
        console.log('sign out successfull');
    }).catch((error) => {
        console.log(error);
    })
    return (dispatch) => {
        dispatch({
            type: SIGN_OUT,
        })
    }
}