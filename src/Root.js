import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers/index';

export default ({ children }) => (
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        {children}
    </Provider>
)