import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, state, subscribe, updatePostText} from './Components/Redux/State';

import {BrowserRouter} from "react-router-dom";
export const rerenderEntireTree = () => {
    return (
        ReactDOM.render( <BrowserRouter> <App state={state} addPost={addPost} updatePostText={updatePostText}/></BrowserRouter>, document.getElementById('root')
        ))
}
rerenderEntireTree()
subscribe(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change)
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
