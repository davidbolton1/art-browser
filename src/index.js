import {createStore} from 'redux';
import {art} from './reducers';
import {
    SEARCH,
    actionSearch
} from './actions'



const store = createStore(art);
store.subscribe(() => {
    console.table(store.getState());
})
store.dispatch(actionSearch('Greece'));
/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/