import s from "./MyPosts.module.css";
import React, {memo} from "react";
import {Post} from "./Post/Post";

import {ProfilePropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/Validators/Validators";
import {Textarea} from "../../Coomman/FormsControls/FormsControls";

type FormDataType = {
    newPostMessage:string
}
const PostMessageReduxForm = reduxForm<FormDataType>({form:"post"})(PostMessageForm)

const maxLength10 = maxLengthCreator(10)

function PostMessageForm(props:InjectedFormProps<FormDataType>) {
    return <form onSubmit={props.handleSubmit}>
        <div>
                    <Field
                        placeholder={'post'} name = {"newPostMessage"} component = {Textarea} validate={[required, maxLength10]} //
                        // вешаем на Field атрибут валидатор и в него в массииве передаются все валидаторы которые нужны,
                        // required валидатор о проверки заполненного поля который мы отдаем чтобы его redux-form вызвала сама
                        // maxLengthCreator мы его вызывваем он нам возвращает валидатор и ретурнит функцию и эту функцию уже вызовит redux-form
                    />
        </div>
        <div>
            <button>add post</button>
        </div>
    </form>;
}

export function  MyPosts  (props: ProfilePropsType) {

    const addPost = (formData: FormDataType) => {
        props.addPost(formData.newPostMessage)
    }
    const posts = props.postData.map((p) => <Post message={p.message} likesCount={p.likesCount}/>)
        console.log("render MyPosts")
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

