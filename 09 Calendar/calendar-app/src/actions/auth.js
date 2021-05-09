import Swal from 'sweetalert2';
import { fetchSinToken, fetchWithToken } from '../helpers/fetch'
import { types } from '../types/types';

export const startLogin = (email, password) => {
    return async (dispatch) => {

        const resp = await fetchSinToken('auth', { email, password }, 'POST');
        const body = await resp.json();

        if (body.ok) {
            console.log('login exitoso :D');
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}


const login = (user) => ({
    type: types.authLogin,
    payload: user
})

export const startRegister = (email, password, name) => {

    return async (dispatch) => {
        const resp = await fetchSinToken('auth/new', { email, password, name }, 'POST');
        const body = await resp.json();


        if (body.ok) {
            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));

        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}


export const startChecking = () => {
    return async (dispatch) => {

        const resp = await fetchWithToken('auth/renew');
        const body = await resp.json();


        if (body.ok) {

            localStorage.setItem('token', body.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(login({
                uid: body.uid,
                name: body.name
            }));

        } else {
            dispatch(checkingFinish);
        }
    }
}


const checkingFinish = () => ({
    type: types.authCheckingFinish
})

export const startLogout = () => {
    return (dispatch) => {

        localStorage.clear();
        dispatch(logout());
        dispatch(logoutClearEventActive());
    }
}

const logout = () => ({ type: types.authLogout })

const logoutClearEventActive = () => ({ type: types.authLogout })