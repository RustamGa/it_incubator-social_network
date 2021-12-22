import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {PostsType} from "../../Redux/profile-reducer";

type PropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostMessage: string
    postData: Array<PostsType>
}

export const MyPosts = (props: PropsType) => {
    const posts = props.postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)
    const onAddPost = () => {
        props.addPost()
    }
    const onUpdateNewPostText = (e:ChangeEvent<HTMLTextAreaElement>) => props.updateNewPostText(e.currentTarget.value)
    return <div className={s.postsBlock}>
        <div>
            My posts
        </div>
        <div>
            <div>
                    <textarea
                        onChange={onUpdateNewPostText}
                        value={props.newPostMessage}
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

}

