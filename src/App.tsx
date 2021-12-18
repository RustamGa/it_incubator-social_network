import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {ActionType, StateDataPropsType} from "./Components/Redux/Store";
import {StoreType} from "./Components/Redux/redux-store";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";

type PropsType = {
    store: StoreType
}
const App = (props: PropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() =>
                    <DialogsContainer
                        store={props.store}
                    />}/>
                <Route path='/profile' render={() =>
                    <Profile
                        store={props.store}
                    />}/>
            </div>
        </div>

    )
}


export default App;
