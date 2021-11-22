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
id:number
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
            {id: 1, message: 'My first post', likesCount: 2},
            {id: 2, message: 'Yo', likesCount: 10}
        ]
    }
}
export type AddPostPropsType ={
    addPost:(postMessage:string) => void
}
export const addPost = (postMessage:string) => {
debugger
    let newPost: PostsPropsType = {
        id:5,
        message:postMessage,
        likesCount: 10
    }
    return(
       state.postsPage.postData.push(newPost)
   )

}

// let[state,setState]=useState( {dialogsPage: {
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