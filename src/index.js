import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {};
/* eslint no-restricted-globals: 0*/
let initialState = {
    location: location.pathname.replace(/^\/?|\/$/g, ""),
};
window.setState = (initialState) => {
    state = Object.assign({}, state, initialState);
    ReactDOM.render(
            <App {...state} />
        , document.getElementById('root'));
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
window.setState(initialState);

serviceWorker.unregister();
