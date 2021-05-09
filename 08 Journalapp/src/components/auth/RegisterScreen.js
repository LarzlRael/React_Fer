import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';

import validator from 'validator'
import { removeError, setError } from '../actions/ui';
import { startRegisterWithEmailPassword } from '../actions/auth';

const RegisterScreen = () => {

    const dispatch = useDispatch();
    //get the state 
    const { msgError } = useSelector(state => state.ui);


    const [formValues, handleInputChange] = useForm({
        name: 'larzdo',
        email: 'xdxd@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }

    }

    const isFormValid = () => {
        if (name.trim().length === 0) {

            dispatch(setError('Name is required'));
            return false;

        } else if (!validator.isEmail(email)) {

            dispatch(setError('Email is not valid'));
            return false;

        } else if (password !== password2 || password.length <= 5) {
            dispatch(setError('password should be at least 5 caracteres and match each it'));
            return false;
        }
        dispatch(removeError())
        return true;
    }


    return (
        <div >
            <h3 className="auth__title">
                Register
            </h3>
            <form onSubmit={handleSubmit}>

                {
                    msgError &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    autoComplete="off"
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit">
                    Register
                </button>
                <hr />

                <Link
                    className="link"
                    to="/auth/login"
                >
                    Already register?
                </Link>
            </form>
        </div>
    )
}

export default RegisterScreen
