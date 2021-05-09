import React from 'react'
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import { store } from './components/store/store'

const JournalApp = () => {
    return (
        // using the provider in the higher component
        <Provider store={store} >
            <AppRouter />
        </Provider>
    )
}

export default JournalApp
