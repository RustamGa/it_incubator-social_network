import React from "react";
import s from "./NavBar.module.css"
import {NavLink} from "react-router-dom"
export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to ="/profile" activeClassName ={s.activeLink}> Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = "/dialogs" activeClassName ={s.activeLink}> Message</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to = "/users" activeClassName ={s.activeLink}> Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to ="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}