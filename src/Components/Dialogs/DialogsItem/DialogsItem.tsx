import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsPropsType} from "../Dialogs";
import s from "../Dialogs.module.css"

export const DialogItem = (props: DialogsPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialogs} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
