import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogsData = [
    {id: 1, name: 'Amir'},
    {id: 2, name: 'Rustam'},
    {id: 3, name: 'Sasha'}
]
const messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'I\'m fine'}
]
const postData = [
    {message: 'My first post', likesCount: 2},
    {message: 'Yo', likesCount: 10}
]

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postData={postData}/>,  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
