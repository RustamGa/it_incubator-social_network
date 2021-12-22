
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
export const profileReducer = (state: PostsPageType=initialState, action: ActionsProfileType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsType = {
                id: 3,
                message: state.newPostMessage,
                likesCount: 10
            };
            state.postData.push(newPost);
            state.newPostMessage = ""
            return state;
        case "UPDATE-POST":
            state.newPostMessage = action.newPostMessage
            return state;
        default:
            return state;
    }
}
export const addPostTypeCreator = () => ({
    type: 'ADD-POST'
} as const)
export const updateNewPostTextTypeCreator = (text: string) => ({
    type: 'UPDATE-POST',
    newPostMessage: text
} as const)

export type ActionsProfileType = ReturnType<typeof addPostTypeCreator>
    | ReturnType<typeof updateNewPostTextTypeCreator>
