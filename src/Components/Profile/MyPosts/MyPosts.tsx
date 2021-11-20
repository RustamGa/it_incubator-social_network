import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import { PostsPagePropsType} from "../../Redux/State";
type newPostsElementType={
    newPostElement:string
}

export const MyPosts = (props:PostsPagePropsType) => {

    const posts = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {

        alert(newPostElement.current?.value)
    }
    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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


