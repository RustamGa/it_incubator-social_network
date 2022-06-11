import React from "react";
import {
    ReducerType,
} from "../Redux/redux-store";
import {
    ActionDialogsType,
    addDialogsTextTypeCreator, DialogsPageType,
    updateNewDialogsTextTypeCreator
} from "../Redux/dialogs-reducer";
import {ActionsProfileType} from "../Redux/profile-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type MapStatePropsType = {
    dialogsPage:DialogsPageType
    isAuth:boolean
}
type MapDispatchPropsType = {
    sendMessageClick:()=>void
    updateNewDialogsText: (newText:string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType
const mapStateToProps = (state: ReducerType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
const mapDispatchToProps = (dispatch: (action: ActionDialogsType) => void):MapDispatchPropsType => {
    return {
        sendMessageClick: () => {
            dispatch(addDialogsTextTypeCreator());
        },
        updateNewDialogsText: (newText: string) => {
            dispatch(updateNewDialogsTextTypeCreator(newText));
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
