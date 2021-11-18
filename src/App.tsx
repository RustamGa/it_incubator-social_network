import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

export type DialogsPropsType = {
    id: number,
    name: string
}
export type DialogsDataPropsType = {
    dialogsData:Array<DialogsPropsType>
}
export type messagesPropsType = {
    id: number,
    message: string
}
export type messagesDataPropsType = {
    messagesData:Array<messagesPropsType>
}
export type PostsPropsType ={
    message:string
    likesCount:number
}
export type PostsDataPropsType={
    postData:Array<PostsPropsType>
}
const App = (props:DialogsDataPropsType & messagesDataPropsType & PostsDataPropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/profile' render={() => <Profile postData={props.postData}/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
