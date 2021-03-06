import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Route} from "react-router";

import {ActionDialogsType} from "./Components/Redux/dialogs-reducer";
import {ActionsProfileType} from "./Components/Redux/profile-reducer";

import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Login} from "./Components/Login/login";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";



type PropsType = {}

const App = (props: PropsType) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                {/*<Route path='/profile' render={() => <Profile/>}/>*/}
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>

    )
}


export default App;
