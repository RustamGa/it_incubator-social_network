import {authAPI} from "../Api/api";
import {ThunkDispatch} from "redux-thunk";
import {ReducerType} from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_LOGIN = 'SET-LOGIN'


export type AuthDataType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

let initialState: AuthDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}


export const authReducer = (state: AuthDataType = initialState, action: ActionsAuthType): AuthDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }

        case SET_LOGIN:
            return {
                ...state
            }
        default:
            return state;

    }
}
export const setUserData = (id: null | number, email: null | string, login: null | string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
} as const)

export const setLogin = (email: string, password: string, rememberMe: boolean) => ({
    type: SET_LOGIN,
    data: {email, password, rememberMe}
} as const)

export const authThunkCreator = () => {
    return (dispatch: (action: ActionsAuthType) => void) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        });

    }
}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch:ThunkDispatch<ReducerType, unknown, ActionsAuthType>) => {
        authAPI.loginMe(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunkCreator())
            }
        });
    }
}
export const loginOutThunkCreator = () => {
    return (dispatch: (action: ActionsAuthType) => void) => {
        authAPI.logOutMe().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        });
    }
}

export type ActionsAuthType =
    ReturnType<typeof setUserData> |
    ReturnType<typeof setLogin>


