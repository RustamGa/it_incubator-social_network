import React from "react";
import s from "./ProfileInfo.module.css"



export const ProfileInfo =() => {


    return (
        <div>
        <div>
            <img src='https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/Facebook-social-media-icon-like-adobe.jpeg' />
        </div>
    <div className={s.descriptionBlock}>
        ava + description
    </div>
        </div>
    )
}