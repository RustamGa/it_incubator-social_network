import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {
    PostsPropsType
} from "../../Redux/Store";


type PropsType = {
    updateNewPostText: (newText: string) => void
    newPostMessage: string
    addPost: () => void
    posts: Array<PostsPropsType>
}


export const MyPosts = (props: PropsType) => {

    const posts = props.posts.map((p: PostsPropsType) => <Post message={p.message} likesCount={p.likesCount}/>)


    const onUpdateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const newPostMessage = props.newPostMessage
    const onAddPost = () => {
        props.addPost()
    }
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
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>

        </div>
    )
}

