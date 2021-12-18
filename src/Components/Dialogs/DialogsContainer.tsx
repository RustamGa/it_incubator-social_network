import React from "react";
import {
    StoreType,
} from "../Redux/redux-store";
import {addDialogsTextTypeCreator, updateNewDialogsTextTypeCreator} from "../Redux/dialogs-reducer";

import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {
    const state = props.store.getState().dialogsPage
    const onSendMessageClick = () => {
        props.store.dispatch(addDialogsTextTypeCreator())
        // props.store.dispatch(updateNewDialogsTextTypeCreator(""))
    }
    const onNewMessageChange = (newText: string) => {
        props.store.dispatch(updateNewDialogsTextTypeCreator(newText))
    }

    return (
        <Dialogs
            updateNewDialogsText={onNewMessageChange}
            addDialogsText={onSendMessageClick}
            state={state}
        />
    )
}