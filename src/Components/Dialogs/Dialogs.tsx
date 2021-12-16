import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"


import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {
    StoreType,
} from "../Redux/redux-store";
import {addDialogsTextTypeCreator, updateNewDialogsTextTypeCreator} from "../Redux/dialogs-reducer";
import {ActionType} from "../Redux/Store";

;

type PropsType = {
    state: StoreType
    dispatch: (action: ActionType) => void
}

export const Dialogs = (props: PropsType) => {
    const state = props.state.dialogsPage
    const dialogs = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = state.messagesData.map(m => <Messages message={m.message} id={m.id}/>)
    const onSendMessageClick = () => {
        props.dispatch(addDialogsTextTypeCreator())
        props.dispatch(updateNewDialogsTextTypeCreator(""))
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.dispatch(updateNewDialogsTextTypeCreator(newText))
    }
    const newMessageText = props.state.dialogsPage.newMessageText

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <div>
                    <div>
                        <textarea placeholder='enter your message'
                                  onChange={onNewMessageChange}
                                  value={newMessageText}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}