import React from 'react';
import './App.css';
import {Dialogs} from './Companents/Dialogs/Dialogs';
import {Header} from "./Companents/Header/Header";
import {Navbar} from "./Companents/Navbar/Navbar";
import { Route} from "react-router-dom";
import { Profile } from './Companents/Profile/Profile';
import {News} from "./Companents/News/News";
import {Music} from "./Companents/Music/Music";
import {Setting} from "./Companents/Setting/Setting";
import state, {AddPostType,  RootStateType, UpdateNewPostTextType} from './Redux/State'
 type AppPropsType = {
     state: RootStateType
     addPost: ()=> void
     updateNewPostText: (newText:string) => void

 }
function App (props:AppPropsType) {
 let dialogs = state.dialogsPage.dialogs
 let messages = state.dialogsPage.messages
 let posts = state.profilePage.posts
 let newPostText = state.profilePage.newPostText



    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render ={()=> <Dialogs dialogsData={dialogs}
                                                                  messagesData={messages}/>}/>
                    <Route path="/profile" render ={()=> <Profile postsData={posts}
                                                                  addPost = {props.addPost}
                                                                  updateNewPostText = {props.updateNewPostText}
                                                                  newPostText = {newPostText}

                    />
                    }
                    />
                    <Route path="/news" render ={()=> <News />}/>
                    <Route path="/music" render ={()=> <Music/>}/>
                    <Route path="/setting" render ={()=> <Setting/>}/>

                </div>
            </div>
    );
}

export default App;
