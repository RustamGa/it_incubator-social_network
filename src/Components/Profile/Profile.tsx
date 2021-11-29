import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    ActionType,
    PostsPropsType,
} from "../Redux/State";

type PropsType = {
    dispatch: (action: ActionType) => void
    newPostMessage:string
    postData:Array<PostsPropsType>
}
export const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                newPostMessage={props.newPostMessage}
                postData={props.postData}
                dispatch={props.dispatch}

            />
        </div>
    )
}