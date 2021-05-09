import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    //1. get the usercontext refences
    //2. SetUser
    const { 
        user,
        setUser } = useContext(UserContext);
    
    const newuser = {
        id: 123,
        name: 'larz',
        email: 'noloserick@parece.falso'
    }
    return (
        <div>
            <h2>Login Screen</h2>
            <hr />
            <button
                class="btn btn-primary"
                type="button"
                onClick={() => setUser(newuser)}>
                Login
            </button>
        </div>
    )
}
