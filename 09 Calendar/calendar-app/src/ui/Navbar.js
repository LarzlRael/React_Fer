import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth)

    const handleLogut = () => {

        dispatch(startLogout());
    }
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                {name}
            </span>

            <button
                onClick={handleLogut}
                className="btn btn-outline-danger">
                <i
                    className="fas fa sign-out-alt"></i>
                <span>Salir</span>
            </button>
        </div>
    )
}
