import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPagePropsType} from "../Redux/Store";

;

type PropsType = {
    state: DialogsPagePropsType
    updateNewDialogsText: (newText: string) => void
    addDialogsText: () => void
}

export const Dialogs = (props: PropsType) => {


    const dialogs = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = props.state.messagesData.map(m => <Messages message={m.message} id={m.id}/>)
    const onSendMessageClick = () => {
        props.addDialogsText()
}
const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.currentTarget.value
    props.updateNewDialogsText(newText)
}
const newMessageText = props.state.newMessageText

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