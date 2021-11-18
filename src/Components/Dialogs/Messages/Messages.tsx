
import s from "../Dialogs.module.css";
import React from "react";
import { messagesPropsType } from "../../../App";

export const Messages = (props:messagesPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}