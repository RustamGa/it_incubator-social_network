import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from './Components/Redux/redux-store';

import {BrowserRouter} from "react-router-dom";
import {StoreType} from "./Components/Redux/redux-store";

export const rerenderEntireTree = (state:StoreType) => {
    return (
        ReactDOM.render(<BrowserRouter> <App  dispatch={store.dispatch.bind(store)}
                                             state={state}/></BrowserRouter>, document.getElementById('root')
        ))
}
rerenderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
})
// If you want your app to work offline and load faster, you can change)
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
