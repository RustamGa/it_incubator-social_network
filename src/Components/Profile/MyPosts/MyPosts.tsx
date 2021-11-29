import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./Post/Post";
import {
    ActionType,

    PostsPropsType,

} from "../../Redux/State";
type PropsType={
    dispatch: (action: ActionType) => void
    newPostMessage:string
    postData:Array<PostsPropsType>
}



export const MyPosts = (props: PropsType) => {

    const posts = props.postData.map((p: PostsPropsType) => <Post message={p.message} likesCount={p.likesCount}/>)
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
        props.dispatch({type: 'UPDATE-POST', newPostMessage: ''})
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
                            props.dispatch({type: 'UPDATE-POST', newPostMessage: e.currentTarget.value})
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

