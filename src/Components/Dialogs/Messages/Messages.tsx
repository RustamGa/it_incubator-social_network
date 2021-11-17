import {MessagesPropsType} from "../Dialogs";
import s from "../Dialogs.module.css";
import React from "react";

export const Messages = (props:MessagesPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}