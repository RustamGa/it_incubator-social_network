const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'


export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: null,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: null,
        github: string,
        mainLink: null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string,
    }
}
export type PostsPageType = {
    postData: Array<PostsType>
    newPostMessage: string
    profile: ProfileType | null
}
let initialState: PostsPageType = {
    postData: [
        {id: 1, message: 'My first post', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 10},
    ],
    newPostMessage: "",
    profile: null
}


export const profileReducer = (state: PostsPageType = initialState, action: ActionsProfileType):PostsPageType => {
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
        case SET_PROFILE_INFO: {
            return {
                ...state, profile:action.profile
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
export const setProfileInfo = (profile:ProfileType) => ({
    type: SET_PROFILE_INFO,
    profile: profile
} as const)

export type ActionsProfileType =
    ReturnType<typeof addPostTypeCreator>
    | ReturnType<typeof updateNewPostTextTypeCreator>
    | ReturnType<typeof setProfileInfo>
