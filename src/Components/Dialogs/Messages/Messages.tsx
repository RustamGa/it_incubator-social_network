import s from "../Dialogs.module.css";
import React from "react";
import {MessagesPropsType} from "../../Redux/State";


export const Messages = (props: MessagesPropsType) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}