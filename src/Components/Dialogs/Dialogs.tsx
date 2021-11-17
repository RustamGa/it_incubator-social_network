import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom"

type DialogsPropsType = {
    name: string
    id:number
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
    const dialogsData = [
        {id:1, name: 'Amir'},
        {id:2, name: 'Rustam'},
        {id:3, name: 'Sasha'}
    ]
    const messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you'},
        {id:3, message: 'I\'m fine'}
    ]
const dialogs = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = messagesData.map(m => <Messages message={m.message}/>)
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