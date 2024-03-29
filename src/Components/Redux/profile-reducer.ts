import {profileAPI, usersAPI} from "../Api/api";

const ADD_POST = 'ADD-POST'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_PROFILE_STATUS = 'SET-PROFILE-STATUS'
const DELETE_POST = 'DELETE-POST'


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
    profile: ProfileType | null
    status: string
}
let initialState: PostsPageType = {
    postData: [
        {id: 1, message: 'My first post', likesCount: 2},
        {id: 2, message: 'Yo', likesCount: 10},
        {id: 2, message: 'I`ll be back!', likesCount: 10}
    ],
    profile: null,
    status: ""
}


export const profileReducer = (state: PostsPageType = initialState, action: ActionsProfileType): PostsPageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 4,
                message: action.postMessage,
                likesCount: 10
            }
            return {
                ...state, postData: [...state.postData, newPost]
            }
        }
        case DELETE_POST: {
            return {
                ...state, postData: state.postData.filter((post) => {
                    return post.id !== action.id
                })
            }
        }
        // case UPDATE_POST_TEXT: {
        //     return {
        //         ...state, newPostMessage: action.newPostMessage
        //     }
        // }
        case SET_PROFILE_STATUS: {
            return {
                ...state, status: action.status
            }
        }
        case SET_PROFILE_INFO: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}
export const addPostTypeCreator = (newPostMessage: string) => ({
    type: ADD_POST,
    postMessage: newPostMessage

} as const)

export const deletePostAC = (postID: number) => ({
    type: DELETE_POST,
    id: postID
} as const)

// export const updateNewPostTextAC = (text: string) => ({
//     type: UPDATE_POST_TEXT,
//     newPostMessage: text
// } as const)

export const setProfileInfoAC = (profile: ProfileType) => ({
    type: SET_PROFILE_INFO,
    profile: profile
} as const)

export const setProfileStatusAC = (status: string) => ({
    type: SET_PROFILE_STATUS,
    status: status
} as const)


export const getProfileThunkCreator = (userId: string) => {
    return async (dispatch: (action: ActionsProfileType) => void) => {
        let response = await usersAPI.getProfileInfo(userId)
        dispatch(setProfileInfoAC(response.data));
    }
}

export const getProfileStatusThunkCreator = (userId: string) => {
    return async (dispatch: (action: ActionsProfileType) => void) => {
        let response = await profileAPI.getProfileStatus(userId)
        dispatch(setProfileStatusAC(response.data));
    }
}

export const upDateProfileStatusThunkCreator = (status: string) => {
    return async (dispatch: (action: ActionsProfileType) => void) => {
        let response = await profileAPI.updateProfileStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setProfileStatusAC(status))
        }
    }
}


export type ActionsProfileType =
    ReturnType<typeof addPostTypeCreator>
    // | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setProfileInfoAC>
    | ReturnType<typeof setProfileStatusAC>
    | ReturnType<typeof deletePostAC>
