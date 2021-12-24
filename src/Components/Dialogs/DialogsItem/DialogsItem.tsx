import {NavLink} from "react-router-dom";
import React from "react";
import {} from "../Dialogs";
import s from "../Dialogs.module.css"
import { } from "../../../App";
import {DialogsType} from "../../Redux/dialogs-reducer";

export const DialogItem = (props: DialogsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialogs} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
