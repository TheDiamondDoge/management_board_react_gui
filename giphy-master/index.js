import 'babel-regenerator-runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers';
import { createLogger } from "redux-logger";
import searchSaga from './sagas/search';
import randomSaga from './sagas/random';
import createSagaMiddleware from 'redux-saga';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import createBrowserHistory from 'history/createBrowserHistory';
import SearchPage from './components/pages/search/search.container';
import TrendingPage from './components/pages/trending/trending.container';
import RandomPage from './components/pages/random/random.container';

const sagas = createSagaMiddleware();
const history = createBrowserHistory();

import App from './components/app/app.container';

const store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history),
        createLogger(),
        sagas
    )
);

sagas.run(searchSaga);
sagas.run(randomSaga);


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App>
                <Route exact path="/" component={SearchPage} />
                <Route exact path="/trending" component={TrendingPage} />
                <Route exact path="/random" component={RandomPage} />
            </App>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
);