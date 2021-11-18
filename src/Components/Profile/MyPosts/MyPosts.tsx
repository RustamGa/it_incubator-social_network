import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";

type MyPostsPropsType = {
    message:string,
    likesCount:number}
type PostDataPropsType = {
    postData:Array<MyPostsPropsType>
}
export const MyPosts = (props:PostDataPropsType) => {

    const posts = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>

        </div>
    )
}


