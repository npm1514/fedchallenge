import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { PageWrapper } from './components/PageWrapper';

import { Home } from './components/home/Home';
import { NotFoundPage } from './components/NotFoundPage';

const routes = (
    <Route path="/" component={PageWrapper}>
        <IndexRoute component={Home} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default routes;
