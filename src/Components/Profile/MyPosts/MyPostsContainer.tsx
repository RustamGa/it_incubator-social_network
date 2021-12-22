import React from "react";
import {ActionsProfileType, addPostTypeCreator, updateNewPostTextTypeCreator} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootReduxStateType} from "../../Redux/redux-store";
import {ActionDialogsType} from "../../Redux/dialogs-reducer";


type PropsType = {
    state: RootReduxStateType
    dispatch: (action: ActionDialogsType | ActionsProfileType) => void
}

export const MyPostsContainer = (props: PropsType) => {
    const addPost = () => {
        props.dispatch(addPostTypeCreator())
    }
    const updateNewPostText = (newText: string) => props.dispatch(updateNewPostTextTypeCreator(newText))
    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 newPostMessage={props.state.postsPage.newPostMessage}
                 postData={props.state.postsPage.postData}/>
    )
}
