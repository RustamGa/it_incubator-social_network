import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Route} from "react-router";
import {RootReduxStateType} from "./Components/Redux/redux-store";

import {ActionDialogsType} from "./Components/Redux/dialogs-reducer";
import {ActionsProfileType} from "./Components/Redux/profile-reducer";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

// type PropsType = {
//     state: RootReduxStateType
//     dispatch: (action: ActionDialogsType | ActionsProfileType) => void
//
// }
const App = () => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <DialogsContainer
                />}/>
                <Route path='/profile' render={() => <Profile
                />}/>
            </div>
        </div>

    )
}


export default App;
