import React, { useState } from 'react'
import { AppRoutes } from './AppRoutes'
import { UserContext } from './UserContext'

export const MainApp = () => {
    const [user, setUser] = useState({

    })
    return (

        // using the context in the parent componente
        // use Provider to provee the context
        <UserContext.Provider value={{
            //? states
            user,
            //? functions
            setUser

        }}>
            <AppRoutes />
        </UserContext.Provider>

    )
}