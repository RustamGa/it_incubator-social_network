import s from "./MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";

import {ProfilePropsType} from "./MyPostsContainer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    newPostMessage:string
}
const PostMessageReduxForm = reduxForm<FormDataType>({form:"post"})(PostMessageForm)

function PostMessageForm(props:InjectedFormProps<FormDataType>) {
    return <form onSubmit={props.handleSubmit}>
        <div>
                    <Field
                        placeholder={'post'} name = {"newPostMessage"} component = {"input"}
                    />
        </div>
        <div>
            <button>add post</button>
        </div>
    </form>;
}

export const MyPosts = (props: ProfilePropsType) => {
    const addPost = (formData:FormDataType) => {
        props.addPost(formData.newPostMessage)
    }
    const posts = props.postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)

    return <div className={s.postsBlock}>
        <div>
            My posts
        </div>
        <PostMessageReduxForm onSubmit={addPost}/>
        <div className={s.posts}>
            {posts}
        </div>

    </div>

}

