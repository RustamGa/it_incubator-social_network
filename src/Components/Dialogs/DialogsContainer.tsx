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
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";

type MapStatePropsType = {
    dialogsPage:DialogsPageType
}
type MapDispatchPropsType = {
    sendMessageClick:()=>void
    updateNewDialogsText: (newText:string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: ReducerType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
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
let AuthRedirectComponent = withAuthRedirect(Dialogs)

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent))
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
