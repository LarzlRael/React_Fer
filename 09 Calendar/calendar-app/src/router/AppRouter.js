import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../auth/LoginScreen';
import CalendarScreen from '../calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRouter';
import { PublicRoute } from './PublicRouter';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { uid } = useSelector(state => state.auth);

    useEffect(() => {

        dispatch(startChecking());

    }, [dispatch]);

    // if (checking) {
    //     return <h5>Espere ...</h5>
    // }

    return (
        <Router>
            <Switch >
                <PublicRoute
                    exact
                    path="/login"
                    component={LoginScreen}
                    isAuthenticated={!!uid}
                />
                <PrivateRoute
                    exact
                    path="/"
                    component={CalendarScreen}
                    isAuthenticated={!!uid}
                />

                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
