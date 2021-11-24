import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AddPostPropsType, PostsPagePropsType, UpdatePostTextPropsType} from "../Redux/State";

export const Profile = (props:PostsPagePropsType & AddPostPropsType&UpdatePostTextPropsType) => {

    return (
        <div>
            <ProfileInfo/>
           <MyPosts newPostMessage={props.newPostMessage}
                    postData={props.postData}
                    addPost={props.addPost}
                    updatePostText={props.updatePostText}
           />
        </div>
    )
}