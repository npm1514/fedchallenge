import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import Reducer from './reducers';

export function configureStore() {
    const initialState = {};

    const reduxRouterMiddleware = routerMiddleware(browserHistory);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        Reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk, ReduxPromise, reduxRouterMiddleware)
        )
    );
    return store;
}
