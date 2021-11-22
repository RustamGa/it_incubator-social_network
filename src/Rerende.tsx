import React from 'react';
import App from './App';
import {addPost, state, StateDataPropsType} from './Components/Redux/State';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom";


export const RerenderEntireTree = (state: StateDataPropsType) => {
    return (
        ReactDOM.render( <BrowserRouter> <App state={state} addPost={addPost}/></BrowserRouter>, document.getElementById('root')
    ))
}
