import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.container';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {createLogger} from "redux-logger";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import reducer from "./reducers"
import * as serviceWorker from './serviceWorker';
import dotenv from 'dotenv';

import './index.scss';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";


dotenv.config();

const sagas = createSagaMiddleware();

let middleware;
if (process.env.NODE_ENV !== 'production') {
    middleware = applyMiddleware(
        createLogger(),
        sagas,
    );
} else {
    middleware = applyMiddleware(
        sagas,
    );
}

const store = createStore(
    reducer,
    middleware
);

sagas.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();