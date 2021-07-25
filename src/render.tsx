import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  {addPost, AddPostType, RootStateType, updateNewPostText, UpdateNewPostTextType} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree= (state:RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}

            />
        </BrowserRouter>,
        document.getElementById('root')
    );

}
