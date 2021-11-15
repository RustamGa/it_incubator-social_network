import React from "react";
import s from "./NavBar.module.css"
export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href ="/profile"> Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href= "/dialogs">Message</a>
            </div>
            <div className={s.item}>
                <a href ="/music">Music</a>
            </div>
            <div className={s.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}