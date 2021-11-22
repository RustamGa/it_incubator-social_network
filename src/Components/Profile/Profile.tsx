import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostPropsType, PostsPagePropsType} from "../Redux/State";

export const Profile = (props:PostsPagePropsType & AddPostPropsType) => {

    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData={props.postData} addPost={props.addPost}/>
        </div>
    )
}