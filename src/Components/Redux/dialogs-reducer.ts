import {ActionType, DialogsPagePropsType, MessagesPropsType} from "./State";

export const dialogsReducer = (state: DialogsPagePropsType, action: ActionType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessagesPropsType = {
                id: 3,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ""
            return state;
        case "UPDATE-DIALOGS-TEXT":
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state
    }
}
export const updateNewDialogsTextTypeCreator = (text: string) => (
    {
        type: 'UPDATE-DIALOGS-TEXT',
        newMessageText: text
    } as const)
export const addDialogsTextTypeCreator = () => ({
    type: 'ADD-MESSAGE'
} as const)
