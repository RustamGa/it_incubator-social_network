import React from "react";

import s from "./../Dialogs.module.css"

type MessageType = {
    message:string;
}

const Message = (props:MessageType) => {
    return (
        <div className={s.item}>
            <img src='https://s3.envato.com/files/342842090/3rdJune2021Photos-68.jpg'/>
            {props.message}
        </div>
    )
}
export default Message