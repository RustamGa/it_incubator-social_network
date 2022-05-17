import React from "react";
import axios from "axios";
import {AuthDataType, getData} from "../Redux/auth-reducer";
import {Header} from "./Header";
import {connect} from "react-redux";
import {ReducerType} from "../Redux/redux-store";

type MapStatePropsType = { // тип initial state users
    login: null | string
    isAuth:boolean

}
type MapDispatchPropsType = {
    getData: (  id: null | number,
                email: null | string,
                login: null | string) => void
}
export type AuthPropsType = MapStatePropsType & MapDispatchPropsType


class HeaderContainer extends React.Component<AuthPropsType> {
    componentDidMount() {// метод жизнего цикла компоненты которая вызывается только олин раз когда перересуется
        // компонента и передаем ей axios запрос
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                   let {id, email, login} = response.data.data
                    this.props.getData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state: ReducerType): MapStatePropsType => { // возвращает частичку стейта,
    // которую мы достаем из reducer
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
}
export default connect(mapStateToProps, {
    getData,
})(HeaderContainer);