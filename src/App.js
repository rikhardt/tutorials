import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux'
import {store} from './redux/store/index';

import './App.css'

export const App = () => {
    return (
        <Provider store={store}>
            <div>
                <AppRouter />
            </div>
        </Provider>
    )
}
