import React from "react";
import { NavLink } from "react-router-dom";
import s from './Navbar.module.css'
export const Navbar = () => {
    return (
<nav className={s.nav}>
    <div className={s.item}>
        <NavLink exact to="/profile"activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={`${s.item} ${s.active}`}>
        <NavLink exact to="/dialogs" activeClassName={s.active}>Message</NavLink>
    </div>
    <div className={s.item}>
        <NavLink exact to="/news" activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
        <NavLink exact to="/music" activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
        <NavLink exact to="/setting" activeClassName={s.active}>Setting</NavLink>
    </div>
</nav>
    )
}
