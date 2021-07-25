import React from "react";
import { NavLink } from "react-router-dom";
import {DialogsPageType, DialogType, MessageType, RootStateType} from "../../Redux/State";
import DialogsItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
//
type DialogsPropsType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

// let dialogsData =[
//     {id:1, name: 'Alex'},
//     {id:2, name: 'Timur'},
//     {id:3, name: 'Amir'},
//     {id:4, name: 'Sasha'},
// ]
// let messageData = [
//     {id:1, message: "Hello! Where are you from?"},
//     {id:2, message: "Hello! Where are you from?"},
//     {id:3, message: "Hello! Where are you from?"},
// ]


export const Dialogs = (props:DialogsPropsType) => {
    let dialogsElements = props.dialogsData.map( (d) => <DialogsItem name={d.name} id={d.id}/>); /// map принимает стрелочную функцию и она вызывается столько раз сколько элементов в массиве, в параметр принимает элемент массива
    let messageElements = props.messagesData.map(( m) => <Message message = {m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}