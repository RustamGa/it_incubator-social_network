import React, { ChangeEvent } from "react";
import s from "../Profile.module.css";
import {Post} from "./Post/Post";
import {AddPostType, PostType, UpdateNewPostTextType} from "../../../Redux/State";


type MyPostsPropsType = {
    postsData: Array<PostType>
    addPost: ()=> void
    updateNewPostText: (newText:string) => void
    newPostText: string
}


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements =
        props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)

    let addPost = () => {
        props.addPost()
    }


    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    // let onPostChange = () => {
    //     let newText = newPostElement.current?.value;
    //     props.updateNewPostText(newText)
    // }

    return (
        <div className={s.MyPostsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea onChange={(event) => {props.updateNewPostText(event.currentTarget.value) }}
                              // ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={props.addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}

