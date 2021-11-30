import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {
    ActionType,

    addPostTypeCreator,

    PostsPropsType,
    updateNewPostTextCreator,

} from "../../Redux/State";
import {ChangeEvent} from "jest-haste-map/build/types";

type PropsType = {
    dispatch: (action: ActionType) => void
    newPostMessage: string
    postData: Array<PostsPropsType>
}


export const MyPosts = (props: PropsType) => {
    const posts = props.postData.map((p: PostsPropsType) => <Post message={p.message} likesCount={p.likesCount}/>)
    const addPost = () => {

        props.dispatch(addPostTypeCreator())
        props.dispatch(updateNewPostTextCreator(""))
    }
    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea
                        onChange={(e) => {
                            props.dispatch(updateNewPostTextCreator(e.currentTarget.value))
                        }}
                        value={props.newPostMessage}
                    />
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>

        </div>
    )
}

