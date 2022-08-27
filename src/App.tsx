import React from 'react';
import './App.css';
import {NavBar} from "./Components/NavBar/NavBar";
import {Route} from "react-router";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {ReducerType} from "./Components/Redux/redux-store";
import {Preloader} from "./Components/Coomman/Preloader";
import {appInitializedThunkCreator} from "./Components/Redux/app-reducer";


type MapDispatchPropsType = {
    appInitializedThunkCreator: () => void
}

type MapStateToPropsType = {
    initialized: boolean
}
const mapStateToProps = (state: ReducerType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized,
    }
}

class App extends React.Component<MapDispatchPropsType & MapStateToPropsType> {

    componentDidMount() {// метод жизнего цикла компоненты которая вызывается только олин раз когда перересуется
        // компонента и передаем ей axios запрос
        this.props.appInitializedThunkCreator()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    {/*<Route path='/profile' render={() => <Profile/>}/>*/}
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>

        )
    }
}

export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {
    appInitializedThunkCreator,
}))(App);