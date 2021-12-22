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
import StoreContext from "../../StoreContext";
//
// type PropsType = {
//     state: RootReduxStateType
//     dispatch: (action: ActionDialogsType | ActionsProfileType) => void
// }

export const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store)=> {

                let state = store.getState()
                const sendMessageClick = () => {
                    store.dispatch(addDialogsTextTypeCreator());
                }
                const updateNewDialogsText = (newText: string) => {
                    store.dispatch(updateNewDialogsTextTypeCreator(newText));
                }
                return (
                <Dialogs
                    sendMessageClick={sendMessageClick}
                    dialogsPage={state.dialogsPage}
                    updateNewDialogsText={updateNewDialogsText}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}