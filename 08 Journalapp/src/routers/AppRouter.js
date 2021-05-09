import React, { useEffect, useState } from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { firebase } from '../firebase/firebase-Config'
import JournaScreen from '../components/journal/JournaScreen'
import { AuthRouter } from './AuthRouter'
import { useDispatch } from 'react-redux'
import { login } from '../components/actions/auth'
import { PrivateRoute } from '../routes/PrivateRoute'
import { PublicRoute } from '../routes/PublicRoute'
import { startLoadingNotes } from '../components/actions/notes'


const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {


            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);

                dispatch(startLoadingNotes(user.uid));

            } else {
                setChecking(false);
            }
            setChecking(false);


        })

    }, [dispatch, setChecking]);

    if (checking) {
        return (
            <h1>Espere ....</h1>
        )
    }

    return (

        <Router>
            <Switch >
                <PublicRoute
                    path="/auth"
                    component={AuthRouter}
                    isAuthenticaded={isLoggedIn}
                />
                <PrivateRoute
                    exact
                    isAuthenticaded={isLoggedIn}
                    path="/"
                    component={JournaScreen}
                />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>


    )
}

export default AppRouter;
