import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsPagePropsType} from "../Redux/State";

export const Profile = (props:PostsPagePropsType) => {

    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData={props.postData}/>
        </div>
    )
}