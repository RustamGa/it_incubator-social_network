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
    newPostMessage: string
}
export type StateDataPropsType = {
    dialogsPage: DialogsPagePropsType
    postsPage: PostsPagePropsType
}
// export type StatePropsType = {
//     _state: StateDataPropsType
// }
export type StoreType = {
    _state: StateDataPropsType
    _rerenderEntireTree: () => void
    addPost: () => void
    updatePostText: (newPostMessage: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateDataPropsType
}
export type AddPostPropsType = {
    addPost: () => void
}
export type UpdatePostTextPropsType = {
    updatePostText: (postMessage: string) => void
}
// let rerenderEntireTree = () => {
//     console.log("yo")
// }
// export const addPost = () => {
//     let newPost: PostsPropsType = {
//         id: 3,
//         message: state.postsPage.newPostMessage,
//         likesCount: 10
//     };
//     state.postsPage.postData.push(newPost);
//     state.postsPage.newPostMessage = ""
//     rerenderEntireTree()
// }
// export const updatePostText = (newPostMessage: string) => {
//
//     state.postsPage.newPostMessage = newPostMessage
//     rerenderEntireTree()
// }
// export const subscribe = (observer: () => void) => {
//     rerenderEntireTree = observer
// }

export let store: StoreType = {
    _state: {
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
    },
    getState() {
        return this._state
    },
    _rerenderEntireTree() {
        console.log("yo")
    },
    addPost() {
        let newPost: PostsPropsType = {
            id: 3,
            message: this._state.postsPage.newPostMessage,
            likesCount: 10
        };
        this._state.postsPage.postData.push(newPost);
        this._state.postsPage.newPostMessage = ""
        this._rerenderEntireTree()
    },
    updatePostText(newPostMessage: string) {
        this._state.postsPage.newPostMessage = newPostMessage
        this._rerenderEntireTree()
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }

}
