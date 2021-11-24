import React, {useState} from "react";

export type DialogsPropsType = {
    id: number,
    name: string
}
export type MessagesPropsType = {
    id: number,
    message: string
}
export type PostsPropsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsPagePropsType = {
    dialogsData: Array<DialogsPropsType>
    messagesData: Array<MessagesPropsType>
}
export type PostsPagePropsType = {
    postData: Array<PostsPropsType>
    newPostMessage:string
}
export type StateDataPropsType = {
    dialogsPage: DialogsPagePropsType
    postsPage: PostsPagePropsType
}
export type StatePropsType = {
    state: StateDataPropsType
}

export const state: StateDataPropsType = {
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Amir'},
            {id: 2, name: 'Rustam'},
            {id: 3, name: 'Sasha'}
        ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'I\'m fine'}
        ],
    },
    postsPage: {
        postData: [
            {id: 1, message: 'My first post', likesCount: 2},
            {id: 2, message: 'Yo', likesCount: 10},
        ],
        newPostMessage: ""
    }
}
export type AddPostPropsType = {
    addPost: () => void
}
export type UpdatePostTextPropsType = {
    updatePostText: (postMessage: string) => void
}
let rerenderEntireTree = () => {
    console.log("yo")
}
export const addPost = () => {
    let newPost: PostsPropsType = {
        id: 3,
        message:state.postsPage.newPostMessage,
        likesCount: 10
    };
    state.postsPage.postData.push(newPost);
    state.postsPage.newPostMessage=""
    rerenderEntireTree()
}
export const updatePostText = (newPostMessage: string) => {

    state.postsPage.newPostMessage=newPostMessage
    rerenderEntireTree()
}
export const subscribe = (observer:()=>void) => {
    rerenderEntireTree=observer
}

//     dialogsData: [
//         {id: 1, name: 'Amir'},
//         {id: 2, name: 'Rustam'},
//         {id: 3, name: 'Sasha'}
//     ],
//         messagesData: [
//         {id: 1, message: 'Hi'},
//         {id: 2, message: 'How are you'},
//         {id: 3, message: 'I\'m fine'}
//     ],
// },
// postsPage: {
//     postData: [
//         {message: 'My first post', likesCount: 2},
//         {message: 'Yo', likesCount: 10}
//     ]
// }})