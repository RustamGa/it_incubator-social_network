import React from "react";
import s from "./Post.module.css";

type MessageType = {
    message:string
    id: number
    likesCount: number
}

 export const Post:React.FC<MessageType> = (props) => {
    return (
        <div className={s.item}>
            <img src='https://s3.envato.com/files/342842090/3rdJune2021Photos-68.jpg'/>
            {props.message}
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
}