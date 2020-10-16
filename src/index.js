import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import browserHistory from 'utils/history';
import { toast } from 'react-toastify'
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import { icons } from './assets/icons'

import { Provider } from 'react-redux'
import configureStore from './store';
import 'react-toastify/dist/ReactToastify.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
React.icons = icons
const store = configureStore();
toast.configure()
ReactDOM.render(
    <Provider store={ store }>
        <Router history={ browserHistory }>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
