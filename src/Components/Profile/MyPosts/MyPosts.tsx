import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {
    ActionType,
    PostsPropsType
} from "../../Redux/Store";
import {addPostTypeCreator, updateNewPostTextTypeCreator} from "../../Redux/profile-reducer";


type PropsType = {
    dispatch: (action: ActionType) => void
    newPostMessage: string
    postData: Array<PostsPropsType>
}


export const MyPosts = (props: PropsType) => {
    const posts = props.postData.map((p: PostsPropsType) => <Post message={p.message} likesCount={p.likesCount}/>)
    const addPost = () => {
        props.dispatch(addPostTypeCreator())
        props.dispatch(updateNewPostTextTypeCreator(""))
    }
    const onUpdateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextTypeCreator(e.currentTarget.value))
    }
    const newPostMessage = props.newPostMessage
    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea
                        onChange={onUpdateNewPostText}
                        value={newPostMessage}
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

