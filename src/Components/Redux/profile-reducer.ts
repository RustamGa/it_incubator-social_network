const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type PostsPageType = {
    postData: Array<PostsType>
    newPostMessage: string
}
let initialState = {
    postData: [
        {id: 1, message: 'My first post', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 10},
    ],
    newPostMessage: ""
}
export const profileReducer = (state: PostsPageType = initialState, action: ActionsProfileType) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 3,
                message: state.newPostMessage,
                likesCount: 10
            }
            return {
                ...state, postData: [...state.postData, newPost],
                newPostMessage: ''
            }
        }
        case UPDATE_POST_TEXT: {
            return {
                ...state, newPostMessage: action.newPostMessage
            }
        }
        default:
            return state;
    }
}
export const addPostTypeCreator = () => ({
    type: ADD_POST
} as const)
export const updateNewPostTextTypeCreator = (text: string) => ({
    type: UPDATE_POST_TEXT,
    newPostMessage: text
} as const)

export type ActionsProfileType = ReturnType<typeof addPostTypeCreator>
    | ReturnType<typeof updateNewPostTextTypeCreator>
