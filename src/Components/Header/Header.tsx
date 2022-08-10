import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {AuthDataType, loginOutThunkCreator} from "../Redux/auth-reducer";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    loginOutThunkCreator: () => void
}
export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd-Z6k2JKdzUx2kx9UGJ_rTo8-ssrMGWUCw&usqp=CAU'/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div> {props.login} - <button onClick={props.loginOutThunkCreator}>log out</button></div> :
                    <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    )
}