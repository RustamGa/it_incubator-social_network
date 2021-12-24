import React from "react";
// import {addPostTypeCreator, profileReducer, updateNewPostTextTypeCreator} from "./profile-reducer";
// import {addDialogsTextTypeCreator, dialogsReducer, updateNewDialogsTextTypeCreator} from "./dialogs-reducer";
//
//
// export type DialogsPropsType = {
//     id: number,
//     name: string
// }
// export type MessagesPropsType = {
//     id: number,
//     message: string
// }
// export type PostsPropsType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// export type DialogsPagePropsType = {
//     dialogsData: Array<DialogsPropsType>
//     messagesData: Array<MessagesPropsType>
//     newMessageText: string
// }
// export type PostsPagePropsType = {
//     postData: Array<PostsPropsType>
//     newPostMessage: string
// }
// export type StateDataPropsType = {
//     dialogsPage: DialogsPagePropsType
//     postsPage: PostsPagePropsType
// }
// export type StoreType = {
//     _state: StateDataPropsType
//     _rerenderEntireTree: () => void
//     subscribe: (observer: () => void) => void
//     getState: () => StateDataPropsType
//     dispatch: (action: ActionType) => void
// }
// export type ActionType =
//     ReturnType<typeof addPostTypeCreator>
//     | ReturnType<typeof updateNewPostTextTypeCreator>
//     | ReturnType<typeof updateNewDialogsTextTypeCreator>
//     | ReturnType<typeof addDialogsTextTypeCreator>


// export let store: StoreType = {
//     _state: {
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Amir'},
//                 {id: 2, name: 'Rustam'},
//                 {id: 3, name: 'Sasha'}
//             ],
//             messagesData: [
//                 {id: 1, message: 'Hi'},
//                 {id: 2, message: 'How are you'},
//                 {id: 3, message: 'I\'m fine'}
//             ],
//             newMessageText: ""
//         },
//         postsPage: {
//             postData: [
//                 {id: 1, message: 'My first post', likesCount: 2},
//                 {id: 2, message: 'Yo', likesCount: 10},
//             ],
//             newPostMessage: ""
//         }
//     },

//     getState() {
//         return this._state
//     },
//     _rerenderEntireTree() {
//         console.log("yo")
//     },
//     // dispatch(action) {
//     //
//     //     this._state.postsPage = profileReducer(this._state.postsPage, action)
//     //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//     //     this._rerenderEntireTree()
//     //
//     // },
//
//     subscribe(observer: () => void) {
//         this._rerenderEntireTree = observer
//     }
//
// }
