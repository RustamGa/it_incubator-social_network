import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/Profile/Profile";
import {NavBar} from "./Components/NavBar/NavBar";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Route} from "react-router";
import {BrowserRouter} from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
    <div className='app-wrapper'>
       <Header/>
       <NavBar/>
        <div className='app-wrapper-content'>
            <Route path = '/dialogs' component={Dialogs}/>
            <Route path = '/profile' component={Profile}/>
        </div>
    </div>
        </BrowserRouter>
    )
}


export default App;
