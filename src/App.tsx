import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {StatePropsType} from "./Components/Redux/State";





const App = (props:StatePropsType) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData} messagesData={props.state.dialogsPage.messagesData}/>}/>
                    <Route path='/profile' render={() => <Profile postData={props.state.postsPage.postData} />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}


export default App;
