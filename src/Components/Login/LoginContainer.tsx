import React from "react";
import {authThunkCreator} from "../Redux/auth-reducer";

import {connect} from "react-redux";
import {ReducerType} from "../Redux/redux-store";
import {Login} from "./login";

type MapStatePropsType = { // тип initial state users
    login: null | string
    isAuth: boolean
}

type MapDispatchPropsType = {
    authThunkCreator: () => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType


class LoginContainer extends React.Component<AuthPropsType> {
    componentDidMount() {// метод жизнего цикла компоненты которая вызывается только олин раз когда перересуется
        // компонента и передаем ей axios запрос
        // this.props.authThunkCreator()
    }

    render() {
        return (
            <Login/>
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
    authThunkCreator,
})(LoginContainer);