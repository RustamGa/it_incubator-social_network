import {NavLink} from "react-router-dom";
import React from "react";
import {} from "../Dialogs";
import s from "../Dialogs.module.css"
import { } from "../../../App";
import {DialogsPropsType} from "../../Redux/Store";

export const DialogItem = (props: DialogsPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialogs} ${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
