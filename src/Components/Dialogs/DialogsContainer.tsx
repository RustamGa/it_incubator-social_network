import React from "react";
import {
    RootReduxStateType,
} from "../Redux/redux-store";
import {
    ActionDialogsType,
    addDialogsTextTypeCreator,
    updateNewDialogsTextTypeCreator
} from "../Redux/dialogs-reducer";
import {ActionsProfileType} from "../Redux/profile-reducer";
import {Dialogs} from "./Dialogs";

type PropsType = {
    state: RootReduxStateType
    dispatch: (action: ActionDialogsType | ActionsProfileType) => void
}

export const DialogsContainer = (props: PropsType) => {

    const sendMessageClick = () => {
        props.dispatch(addDialogsTextTypeCreator())
    }
    const updateNewDialogsText = (newText: string) => {
        props.dispatch(updateNewDialogsTextTypeCreator(newText))
    }
    return (
        <Dialogs
            sendMessageClick={sendMessageClick}
            dialogsPage={props.state.dialogsPage}
            updateNewDialogsText={updateNewDialogsText}/>
    )
}