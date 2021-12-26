import React from "react";
import {ActionsProfileType, addPostTypeCreator, updateNewPostTextTypeCreator} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootReduxStateType} from "../../Redux/redux-store";
import {ActionDialogsType} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state: RootReduxStateType) => {
    return {
        postData: state.postsPage.postData,
        newPostMessage: state.postsPage.newPostMessage
    }
}
const mapDispatchToProps = (dispatch: (actions: ActionsProfileType) => void) => {
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