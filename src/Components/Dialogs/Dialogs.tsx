import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

type DialogsPropsType = {
    name: string
    id:string
}
type MessagesPropsType = {
    message:string
}
const DialogItem = (props:DialogsPropsType) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={`${s.dialogs} ${s.active}`}>
            <NavLink to = {path}>{props.name}</NavLink>
        </div>
    )
}
const Messages = (props:MessagesPropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name ="Amir" id = "1"/>
                <DialogItem name ="Rustam" id = "2"/>
                <DialogItem name ="Sasha" id = "3"/>
            </div>
            <div className={s.messages}>
                <Messages message ="Hi"/>
                <Messages message ="How are you"/>
                <Messages message ="I'm fine"/>
            </div>
        </div>
    )
}