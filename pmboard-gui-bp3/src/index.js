import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from 'history';
import {Provider} from "react-redux";
import {routerMiddleware} from "react-router-redux";
import {createLogger} from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import summaryTabSaga from './sagas/summaryTab';
import infoTabSaga from './sagas/infoTab';
import indicatorsTabSaga from './sagas/indicatorsTab';
import reducer from "./reducers"
import * as serviceWorker from './serviceWorker';

import './index.css';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

const sagas = createSagaMiddleware();
const history = createBrowserHistory();
const store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history),
        createLogger(),
        sagas,
    )
);

//TODO: This must be refactored into 1 'PWS tab' saga!
sagas.run(summaryTabSaga);
sagas.run(infoTabSaga);
sagas.run(indicatorsTabSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
