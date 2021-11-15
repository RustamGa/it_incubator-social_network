import s from "./Post.module.css"
import React from "react";
export const Post = () => {
    return(
        <div>
            <div className={s.item}>
                <img src="https://www.vokrug.tv/pic/news/3/8/c/3/38c3f49dbd3ae32889c8c9103fae9ecf.jpg"/>
                Post 1
                <div>
                <span>
                    like
                </span>
                </div>
            </div>
        </div>
    )
}
