import s from "../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../Redux/dialogs-reducer";


export const Messages = (props: MessagesType) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}