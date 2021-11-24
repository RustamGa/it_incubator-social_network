import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {AddPostPropsType, PostsPagePropsType, UpdatePostTextPropsType} from "../../Redux/State";
import {ChangeEvent} from "jest-haste-map/build/types";



export const MyPosts = (props: PostsPagePropsType & AddPostPropsType&UpdatePostTextPropsType) => {

    const posts = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    const addPost = () => {
            props.addPost()
        props.updatePostText("")
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
                            props.updatePostText(e.currentTarget.value)
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


