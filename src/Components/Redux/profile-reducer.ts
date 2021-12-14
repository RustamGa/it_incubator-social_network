import {ActionType, PostsPagePropsType, PostsPropsType} from "./State";

export const profileReducer = (state: PostsPagePropsType, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsPropsType = {
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