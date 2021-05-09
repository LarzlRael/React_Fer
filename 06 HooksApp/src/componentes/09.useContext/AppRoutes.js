import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect

} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRoutes = () => {
    return (
        <Router>
            <>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route path="/about" component={AboutScreen} />
                    <Route path="/login" component={LoginScreen} />

                    {/* If there is not a valid route the Route for default will be : 
                        1 - Way
                    */ }

                    {/* <Route component={LoginScreen} /> */}

                    {/* If there is not a valid route the Route for default will be : 
                        2 - Way
                    */ }
                    <Redirect to="/" />

                </Switch>
            </>
        </Router>
    )
}
