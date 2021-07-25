import React from "react";
import {rerenderEntireTree} from "../render";

export type AddPostType = {
    addPost: () => void
}
export type UpdateNewPostTextType = {
    updateNewPostText: (newText:string)=> void
}
export type MessageType = {
    id: number
    message: string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
let state: RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, How are you?', likesCount: 10},
            {id: 2, message: 'It is my first post', likesCount: 2}

        ],
        newPostText: ""

    },

    dialogsPage: {
        messages: [
            {id: 1, message: "Hello! Where are you from?"},
            {id: 2, message: "Hello! Where are you from?"},
            {id: 3, message: "Hello! Where are you from?"}
        ],
        dialogs: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Timur'},
            {id: 3, name: 'Amir'},
            {id: 4, name: 'Sasha'}
        ],
    }

}
export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText="";
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText:string) => {
    state.profilePage.newPostText=newText;
    rerenderEntireTree(state);
}
export default state
