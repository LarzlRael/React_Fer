import { types } from "../../types/types"
import { facebookAuthProvider, firebase, googleAuthProvider } from '../../firebase/firebase-Config'
import { finishLoading, startLoading } from "./ui"
import Swal from 'sweetalert2';
import { notesLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading());

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {

                dispatch(login(user.uid, user.displayName));
                dispatch(finishLoading());

            })
            .catch(e => {

                dispatch(finishLoading());
                Swal.fire('Error', e.message, 'error');
            })

    }
}

export const startGoogleLogin = () => {

    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(
                    login(user.uid, user.displayName)
                );
            })
    }
}
export const startFacebookLogin = () => {

    return (dispatch) => {
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(userCred => {
                console.log(userCred);
            })
            .catch((error) => {
                // Handle Errors here.
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // // The email of the user's account used.
                // var email = error.email;
                // // The firebase.auth.AuthCredential type that was used.
                // var credential = error.credential;

                // ...
            });
    }
}
export const login = (uid, displayName) => ({

    type: types.login,
    payload: {
        uid,
        displayName
    }

})

export const startRegisterWithEmailPassword = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });

                dispatch(user.uid, user.displayName)
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })
    }
}

export const startLogout = () => {
    return async (dispatch) => {

        await firebase.auth().signOut();

        dispatch(logout());
        
        dispatch(notesLogout());

    }
}

export const logout = () => ({
    type: types.logout
})