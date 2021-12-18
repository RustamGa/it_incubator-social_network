import React from "react";
import {addPostTypeCreator, updateNewPostTextTypeCreator} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../Redux/redux-store";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {

    const state = props.store.getState()

    const addPost = () => {

        props.store.dispatch(addPostTypeCreator())
        // props.store.dispatch(updateNewPostTextTypeCreator(""))
    }
    const onUpdateNewPostText = (newText: string) => {

        props.store.dispatch(updateNewPostTextTypeCreator(newText))
    }
    return (
        <MyPosts
            updateNewPostText={(newText) => onUpdateNewPostText(newText)}
            addPost={addPost}
            posts={state.postsPage.postData}
            newPostMessage={state.newPostMessage}
        />
    )
}

