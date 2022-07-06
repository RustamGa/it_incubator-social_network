import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"


import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";

import {
    DialogsPageType
} from "../Redux/dialogs-reducer";
import {DialogsPropsType} from "./DialogsContainer";
import {Login} from "../Login/login";
import {Redirect} from "react-router";


// type PropsType = {
//     sendMessageClick: () => void
//     dialogsPage: DialogsPageType
//     updateNewDialogsText: (newText: string) => void
// }

export const Dialogs = (props: DialogsPropsType) => {

    const dialogs = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = props.dialogsPage.messagesData.map(m => <Messages message={m.message} id={m.id}/>)
    const onSendMessageClick = () => {
        props.sendMessageClick()
    }
    const onUpdateNewDialogsText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewDialogsText(e.currentTarget.value)
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
                                  onChange={onUpdateNewDialogsText}
                                  value={props.dialogsPage.newMessageText}>
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
