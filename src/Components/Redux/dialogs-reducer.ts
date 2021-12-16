import {ActionType, DialogsPagePropsType, MessagesPropsType} from "./Store";
let initialState= {
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
        newMessageText: ""
    }
export const dialogsReducer = (state: DialogsPagePropsType=initialState, action: ActionType) => {
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
