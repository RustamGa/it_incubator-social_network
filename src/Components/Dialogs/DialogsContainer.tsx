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
import { connect } from "react-redux";

//
// type PropsType = {
//     state: RootReduxStateType
//     dispatch: (action: ActionDialogsType | ActionsProfileType) => void
// }

// export const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {(store)=> {
//
//                 let state = store.getState()
//                 const sendMessageClick = () => {
//                     store.dispatch(addDialogsTextTypeCreator());
//                 }
//                 const updateNewDialogsText = (newText: string) => {
//                     store.dispatch(updateNewDialogsTextTypeCreator(newText));
//                 }
//                 return (
//                 <Dialogs
//                     sendMessageClick={sendMessageClick}
//                     dialogsPage={state.dialogsPage}
//                     updateNewDialogsText={updateNewDialogsText}/>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state:RootReduxStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch:(action: ActionDialogsType) => void) => {
    return {
        sendMessageClick: ()=>{
            dispatch(addDialogsTextTypeCreator());
            },
        updateNewDialogsText:(newText:string) => {
            dispatch(updateNewDialogsTextTypeCreator(newText));
        }
    }
}
export const DialogsContainer = connect (mapStateToProps,mapDispatchToProps) (Dialogs);
