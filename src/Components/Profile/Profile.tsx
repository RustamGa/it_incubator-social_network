import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
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
           <MyPosts/>
        </div>
    )
}