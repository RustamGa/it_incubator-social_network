import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
export const Profile = () => {
    const postData = [
        {message:'My first post', likesCount:2},
        {message:'Yo', likesCount:10}
    ]
    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData={postData}/>
        </div>
    )
}