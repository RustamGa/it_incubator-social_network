import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {StateDataPropsType, StoreType} from "./Components/Redux/State";

type PropsType = {
    state:StateDataPropsType
    addPost:() => void
    updatePostText: (newPostMessage: string) => void
}
const App = (props: PropsType) => {
const state = props.state
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsData={state.dialogsPage.dialogsData}
                                                              messagesData={state.dialogsPage.messagesData}/>}/>
                <Route path='/profile' render={() => <Profile
                    newPostMessage={state.postsPage.newPostMessage}
                    postData={state.postsPage.postData}
                    addPost={props.addPost}
                    updatePostText={props.updatePostText}
                />}/>
            </div>
        </div>

    )
}


export default App;
