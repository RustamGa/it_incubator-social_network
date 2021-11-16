import s from "./Post.module.css"
import React from "react";
type PostPropsType = {
    message:string
    likesCount:string
}
export const Post = (props:PostPropsType) => {
    return(
        <div>
            <div className={s.item}>
                <img src="https://www.vokrug.tv/pic/news/3/8/c/3/38c3f49dbd3ae32889c8c9103fae9ecf.jpg"/>
                {props.message}
                <div>
                <span>
                     {props.likesCount}
                </span>
                    like
                </div>
            </div>
        </div>
    )
}
