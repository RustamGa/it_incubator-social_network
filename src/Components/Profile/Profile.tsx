import React from "react";
import { PostsDataPropsType } from "../../App";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props:PostsDataPropsType) => {
    // const postData = [
    //     {message:'My first post', likesCount:2},
    //     {message:'Yo', likesCount:10}
    // ]
    return (
        <div>
            <ProfileInfo/>
           <MyPosts postData={props.postData}/>
        </div>
    )
}