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
export type StoreType = {
    _state: StateDataPropsType
    _rerenderEntireTree: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateDataPropsType
    dispatch: (action: ActionType) => void
}
export type ActionType = ReturnType<typeof addPostTypeCreator> | ReturnType<typeof updateNewPostTextCreator>
export type UpdatePostTextPropsType = {
    updatePostText: (postMessage: string) => void
}
export const addPostTypeCreator = () => ({
    type: 'ADD-POST'
} as const)
export const updateNewPostTextCreator = (text: string) => ({
    type: 'UPDATE-POST',
    newPostMessage: text
} as const)
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
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostsPropsType = {
                id: 3,
                message: this._state.postsPage.newPostMessage,
                likesCount: 10
            };
            this._state.postsPage.postData.push(newPost);
            this._state.postsPage.newPostMessage = ""
            this._rerenderEntireTree()
        } else if (action.type === 'UPDATE-POST') {
            this._state.postsPage.newPostMessage = action.newPostMessage
            this._rerenderEntireTree()
        }
    },

    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer
    }

}
