import React from "react";
import s from "./Dialogs.module.css"


import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPagePropsType} from "../Redux/State";


export const Dialogs = (props:DialogsPagePropsType) => {

    const dialogs = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = props.messagesData.map(m => <Messages message={m.message} id={m.id}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}

            </div>
            <div className={s.messages}>
                {messages}

            </div>
        </div>
    )
}