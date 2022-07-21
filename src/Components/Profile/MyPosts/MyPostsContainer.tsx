import React from "react";
import {
    ActionsProfileType,
    addPostTypeCreator,
    PostsType
} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {ReducerType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type MapStateToPropsType = {
    postData: Array<PostsType>
}
type MapDispatchToPropsType = {
    addPost: (postMessage:string) => void
}
export type ProfilePropsType= MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: ReducerType): MapStateToPropsType => {
    return {
        postData: state.postsPage.postData
    }
}
const mapDispatchToProps = (dispatch: (actions: ActionsProfileType) => void):MapDispatchToPropsType => {
    return {
        addPost: (postMessage) => {
            dispatch(addPostTypeCreator(postMessage));
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)