const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_DIALOGS_TEXT = 'UPDATE-DIALOGS-TEXT'

export type DialogsType = {
    id: number,
    name: string
}
export type MessagesType = {
    id: number,
    message: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
    newMessageText: string
}

let initialState = {
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
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionDialogsType): DialogsPageType => {
    // let stateCopy = {
    //     ...state,
    //     messagesData: [...state.messagesData]
    // }
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessagesType = {
                id: 3,
                message: state.newMessageText,
            }
            return {
                ...state, messagesData: [...state.messagesData, newMessage],
                newMessageText: ""
            }
        }
        case UPDATE_DIALOGS_TEXT: {
            return {
                ...state, newMessageText: action.newMessageText
            }
        }
        default:
            return state
    }
}
export const updateNewDialogsTextTypeCreator = (text: string) => (
    {
        type: UPDATE_DIALOGS_TEXT,
        newMessageText: text
    } as const)
export const addDialogsTextTypeCreator = () => ({
    type: ADD_MESSAGE
} as const)

export type ActionDialogsType =
    ReturnType<typeof updateNewDialogsTextTypeCreator>
    | ReturnType<typeof addDialogsTextTypeCreator>