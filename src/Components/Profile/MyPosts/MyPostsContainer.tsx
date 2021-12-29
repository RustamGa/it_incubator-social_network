import React from "react";
import {
    ActionsProfileType,
    addPostTypeCreator,
    PostsType,
    updateNewPostTextTypeCreator
} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReducerType} from "../../Redux/redux-store";
import {ActionDialogsType} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

type MapStateToPropsType = {
    postData: Array<PostsType>
    newPostMessage: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (newText: string) => void
    addPost: () => void
}
export type ProfilePropsType= MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReducerType): MapStateToPropsType => {
    return {
        postData: state.postsPage.postData,
        newPostMessage: state.postsPage.newPostMessage
    }
}
const mapDispatchToProps = (dispatch: (actions: ActionsProfileType) => void):MapDispatchToPropsType => {
    return {
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextTypeCreator(newText));
        },
        addPost: () => {
            dispatch(addPostTypeCreator());
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)