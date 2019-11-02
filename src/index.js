import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import { BrowserRouter } from 'react-router-dom';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import thunk from 'redux-thunk';
import authReducer from './store/reducers/auth';

// not working i dont know why const composeEnhancers = process.env.NODE_ENV === 'development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  || compose;

const reducers = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth:authReducer
})

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
