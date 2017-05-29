import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import routes from './routes';

ReactDOM.render(
    <Router history={ hashHistory } routes={ routes }></Router>,
    document.getElementById('root')
);
