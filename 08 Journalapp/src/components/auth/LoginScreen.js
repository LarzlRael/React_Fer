import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { login, startFacebookLogin, startGoogleLogin, startLoginEmailPassword } from '../actions/auth'

export const LoginScreen = () => {

    // will give us the ability to dispatch from anywhere without needing the store
    const dispatch = useDispatch();

    // getting the state from store
    const { loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: 'xdxd@gmail.com',
        password: '123456'
    });
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        console.log(email, password);
        // using the useDistpach
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const handleFacebookLogin = () => {
        dispatch(startFacebookLogin());

    }

    return (
        <>
            <form
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animate__faster"
            >
                <h3 className="auth__title">
                    Login
                </h3>
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
                <button
                    className="btn btn-primary btn-block"
                    disabled={loading}
                    type="submit">
                    Login
                </button>
                <hr />

                <div className="auth__social-networks">
                    <p>Login with your social networks</p>
                    <div
                        onClick={handleGoogleLogin}
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                    <div
                        className="google-btn mb-5"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" alt="facebook button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with Facebook</b>
                        </p>
                    </div>
                </div>
                <Link
                    className="link"
                    to="/auth/register"
                >Create new Account</Link>
            </form>
        </>
    )
}
