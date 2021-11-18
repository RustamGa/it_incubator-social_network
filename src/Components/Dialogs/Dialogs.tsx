import React from "react";
import s from "./Dialogs.module.css"


import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsDataPropsType, messagesDataPropsType} from "../../App";
//
// export type DialogsPropsType = {
//     name: string
//     id: number
// }
// export type DialogsDataPropsType = {
//     dialogsData: Array<DialogsPropsType>
// }
// export type MessagesPropsType = {
//     message: string
//     id: number
// }
// export type MessagesDataPropsType ={
//     messagesData:Array<MessagesPropsType>
// }
export const Dialogs = (props: DialogsDataPropsType & messagesDataPropsType) => {
//     const dialogsData = [
//         {id: 1, name: 'Amir'},
//         {id: 2, name: 'Rustam'},
//         {id: 3, name: 'Sasha'}
//     ]
//     const messagesData = [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How are you'},
//         {id: 3, message: 'I\'m fine'}
//     ]
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