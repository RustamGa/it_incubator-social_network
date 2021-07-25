import React from "react";
import { NavLink } from "react-router-dom";
import { DialogType } from "../../../Redux/State";
import s from "./../Dialogs.module.css"

// type DialogItemPropsType = {
//     id: number
//     name: string
// }

const DialogsItem = (props:DialogType) => {
    let path = "/dialogs/"+props.id;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path} >
                {props.name}
            </NavLink>
        </div>
    )
}
export default DialogsItem