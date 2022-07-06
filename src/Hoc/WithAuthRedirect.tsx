import React, {Component, ComponentType} from "react";
import {Redirect} from "react-router";
import {Dialogs} from "../Components/Dialogs/Dialogs";
import {ReducerType} from "../Components/Redux/redux-store";
import {DialogsPageType} from "../Components/Redux/dialogs-reducer";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth:boolean
}
const mapStateToProps  =(state:ReducerType):MapStatePropsType =>   {
    return {isAuth:state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to="/login"/>
        }
        return <Component {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
// Создаем функцию которая на входе будет принимать компоненту,
// создаем внутри классовую компоненту или функциональную компоненту,
// export const withAuthRedirect = (Component:ComponentType)=> {
//     class RedirectComponent extends React.Component<MapStatePropsType> {
//
//         render() {
//             if (!this.props.isAuth) return <Redirect to={'/login'}/>
//             return <Component {...this.props}/> // перерисовываем целевую компоненту которую принимаем на входе
//         }
//     }
//     let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent) //оборачиваем в connect контейнерную
//     // компоненту RedirectComponent для взятия из store isAuth
//
//     return ConnectedRedirectComponent // возвращаем свою контейнерную компоненту для каждой целевой компоненту которая приходит
// }