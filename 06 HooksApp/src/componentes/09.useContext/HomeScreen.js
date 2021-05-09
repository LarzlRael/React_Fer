import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    // to use the userContext use the UserContext
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            <h2>Home Screen</h2>
            <hr />
            <pre className="container">
                {JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
