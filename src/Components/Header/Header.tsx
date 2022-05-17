import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
import {AuthDataType} from "../Redux/auth-reducer";
type HeaderPropsType = {
    isAuth:boolean
    login:string|null
}
export const Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBd-Z6k2JKdzUx2kx9UGJ_rTo8-ssrMGWUCw&usqp=CAU'/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login:  <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    )
}