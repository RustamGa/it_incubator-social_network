import React from "react";
import s from "./Profile.module.css"
export const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img src='https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/Facebook-social-media-icon-like-adobe.jpeg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div >
                New posts
            </div>
            <div>
                <div className={s.item}>
                    Post 1
                </div>
                <div className={s.item}>
                    Post 2
                </div>
            </div>
        </div>
    )
}