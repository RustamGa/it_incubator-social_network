import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileIInfo";
import {AddPostType, PostType, UpdateNewPostTextType} from "../../Redux/State";

type ProfilePropsType = {
    postsData:PostType[]
    addPost: ()=> void
    updateNewPostText: (newText:string) => void
    newPostText: string
}
export const Profile = (props:ProfilePropsType) => {
    // let postData = [
    //     {id:1, message: 'Hi, How are you?', likesCount:10},
    //     {id:2, message: 'It is my first post', likesCount: 2},
    //
    // ]`


    return (
    <div>
        <ProfileInfo />
        <MyPosts
        postsData={props.postsData}
        addPost={props.addPost}
        updateNewPostText = {props.updateNewPostText}
        newPostText={props.newPostText}

        />
    </div>
)
}