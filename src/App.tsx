import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {AddPostPropsType, StatePropsType, UpdatePostTextPropsType} from "./Components/Redux/State";


const App = (props: StatePropsType & AddPostPropsType & UpdatePostTextPropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                              messagesData={props.state.dialogsPage.messagesData}/>}/>
                <Route path='/profile' render={() => <Profile
                    newPostMessage={props.state.postsPage.newPostMessage}
                    postData={props.state.postsPage.postData}
                    addPost={props.addPost}
                    updatePostText={props.updatePostText}
                />}/>
            </div>
        </div>

    )
}


export default App;
