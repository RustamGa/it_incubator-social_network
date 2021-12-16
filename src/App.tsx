import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {ActionType, StateDataPropsType} from "./Components/Redux/Store";
import {StoreType} from "./Components/Redux/redux-store";

type PropsType = {
    dispatch: (action: ActionType) => void
    state: StoreType
}
const App = (props: PropsType) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs state={props.state}
                                                              dispatch={props.dispatch}
                />}/>
                <Route path='/profile' render={() => <Profile
                    newPostMessage={props.state.postsPage.newPostMessage}
                    postData={props.state.postsPage.postData}
                    dispatch={props.dispatch}
                />}/>
            </div>
        </div>

    )
}


export default App;
