import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { site } from './site';
import { dashboard } from './../components/home/DashboardReducers';

const rootReducer = combineReducers({
    site,
    dashboard,
    routing
});

export default rootReducer;
