import React from "react";

export type DialogsPropsType = {
    id: number,
    name: string
}
export type MessagesPropsType = {
    id: number,
    message: string
}
export type PostsPropsType = {

    message: string
    likesCount: number
}

export type DialogsPagePropsType = {
    dialogsData: Array<DialogsPropsType>
    messagesData: Array<MessagesPropsType>
}
export type PostsPagePropsType = {
    postData: Array<PostsPropsType>
}
export type StateDataPropsType = {
    dialogsPage: DialogsPagePropsType
    postsPage: PostsPagePropsType
}
export type StatePropsType ={
    state:StateDataPropsType
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
            {message: 'My first post', likesCount: 2},
            {message: 'Yo', likesCount: 10}
        ]
    }
}
