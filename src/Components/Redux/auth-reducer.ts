import {authAPI} from "../Api/api";
import {ThunkDispatch} from "redux-thunk";
import {ReducerType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA'
const SET_LOGIN = 'SET-LOGIN'


export type AuthDataType = {
    id: string | null
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
            console.log(action)
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
export const setUserData = (id: string | null, email: null | string, login: null | string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {id, email, login, isAuth}
} as const)

export const setLogin = (email: string, password: string, rememberMe: boolean) => ({
    type: SET_LOGIN,
    data: {email, password, rememberMe}
} as const)

export const  authThunkCreator = () => {
    return (dispatch: (action: ActionsAuthType) => void) => {
        return authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        });

    }
}
export const loginThunkCreator = (email: string, password: string, rememberMe: boolean) => {

    return (dispatch:ThunkDispatch<ReducerType, unknown, ActionsAuthType | FormAction>) => {
        authAPI.loginMe(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(authThunkCreator())
            }
            else {
               let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error:message}))  // stopSubmit специальный action creator из
                // redux-form, который стопает submitForm
            } //
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




