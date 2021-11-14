import React from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Profile} from "./Components/Profile";
import {NavBar} from "./Components/NavBar";

const App = () => {
    return(
    <div className='app-wrapper'>
       <Header/>
       <NavBar/>
        <Profile/>

    </div>
    )
}


export default App;
