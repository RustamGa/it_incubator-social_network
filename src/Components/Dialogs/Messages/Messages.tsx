
import s from "../Dialogs.module.css";
import React from "react";
import { MessagesPropsType } from "../../Redux/State";


export const Messages = (props:MessagesPropsType) => {
    const newTextMessage = React.createRef<HTMLTextAreaElement>()
    const addText=()=>{
        alert(newTextMessage.current?.value)
    }
    return (
        <div>
        <div className={s.message}>{props.message}</div>
            <textarea ref ={newTextMessage}></textarea>
            <button onClick={addText}>add message</button>
        </div>
    )
}