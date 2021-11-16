import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`${s.dialogs} ${s.active}`}>
                   <NavLink to = "/dialogs/1">Amir</NavLink>
                </div>
                <div className ={s.dialog}>
                    <NavLink to = "/dialogs/2"> Rustam </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Sasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>I'm fine</div>
            </div>
        </div>
    )
}