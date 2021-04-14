import React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './../routes';
import { configureStore } from './../store';

// Create a store connected with Redux
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

export function AppRoutes() {
    return (
        <MuiThemeProvider>
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>
        </MuiThemeProvider>
    );
}
