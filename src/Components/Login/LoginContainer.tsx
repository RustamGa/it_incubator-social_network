import React from "react";
import {authThunkCreator, loginThunkCreator} from "../Redux/auth-reducer";

import {connect} from "react-redux";
import {ReducerType} from "../Redux/redux-store";
import {Login} from "./login";

type MapStatePropsType = { // тип initial state users
    login: null | string
    isAuth: boolean
}

type MapDispatchPropsType = {
    authThunkCreator: () => void
    loginThunkCreator: (email: string, password: string, rememberMe: boolean) => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType


class LoginContainer extends React.Component<AuthPropsType> {
    componentDidMount() {// метод жизнего цикла компоненты которая вызывается только один раз когда перерисуется
        // компонента и передаем ей axios запрос
        // this.props.authThunkCreator()
    }

    render() {
        return (
            <Login loginThunkCreator={this.props.loginThunkCreator} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: ReducerType): MapStatePropsType => { // возвращает частичку стейта,
    // которую мы достаем из reducer
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}
export default connect(mapStateToProps, {
    authThunkCreator, loginThunkCreator
})(LoginContainer);