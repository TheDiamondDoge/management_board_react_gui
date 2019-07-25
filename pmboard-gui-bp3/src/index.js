import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {applyMiddleware, createStore} from "redux";
import {createBrowserHistory} from 'history';
import {Provider} from "react-redux";
import {routerMiddleware} from "react-router-redux";
import {createLogger} from "redux-logger";
import * as serviceWorker from './serviceWorker';

import './index.css';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";


const history = createBrowserHistory();
const store = createStore(
    applyMiddleware(
        routerMiddleware(history),
        createLogger()
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
