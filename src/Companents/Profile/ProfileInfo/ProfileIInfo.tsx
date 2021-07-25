import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://769961.smushcdn.com/1407269/wp-content/uploads/2019/07/socialmedia.jpg?lossy=1&strip=1&webp=1'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}