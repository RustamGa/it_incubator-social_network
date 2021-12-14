import React from "react";
import s from "./Dialogs.module.css"


import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {
    StoreType,
} from "../Redux/State";
import {addDialogsTextTypeCreator, updateNewDialogsTextTypeCreator} from "../Redux/dialogs-reducer";

type PropsType = {
    store: StoreType
}

export const Dialogs = (props: PropsType) => {
    const state = props.store.getState().dialogsPage
    const dialogs = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = state.messagesData.map(m => <Messages message={m.message} id={m.id}/>)
    const onSendMessageClick = () => {
        props.store.dispatch(addDialogsTextTypeCreator())
        props.store.dispatch(updateNewDialogsTextTypeCreator(""))
    }
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
                                  onChange={(e) => {
                                      props.store.dispatch(updateNewDialogsTextTypeCreator(e.currentTarget.value))
                                  }}>
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