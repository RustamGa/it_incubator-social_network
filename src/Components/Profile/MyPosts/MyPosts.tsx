import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {AddPostPropsType, PostsPagePropsType} from "../../Redux/State";
type newPostsElementType={
    newPostElement:string
}

export const MyPosts = (props:PostsPagePropsType&AddPostPropsType) => {

    const posts = props.postData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
   let postMessage = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (postMessage.current)
        {props.addPost(postMessage.current.value)}


    }

    return (
        <div className={s.postsBlock}>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea ref={postMessage}></textarea>
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


