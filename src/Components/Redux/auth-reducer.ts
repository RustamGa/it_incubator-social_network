import {authAPI} from "../Api/api";

const GET_DATA = 'GET-DATA'
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
        case GET_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_LOGIN:
            return {
                ...state
            }
        default:
            return state;

    }
}
export const getData = (id: null | number, email: null | string, login: null | string) => ({
    type: GET_DATA,
    data: {id, email, login}
} as const)

export const setLogin = (email:string, password:string, rememberMe:boolean) => ({
    type: SET_LOGIN,
    data: {email,password, rememberMe }
} as const)

export const authThunkCreator = () => {
    return (dispatch: (action: ActionsAuthType) => void) => {
        authAPI.authMe().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(getData(id, email, login))
            }
        });

    }
}
export const loginThunkCreator = (email:string, password:string, rememberMe:boolean, captcha:boolean) =>{
    return (dispatch: (action: ActionsAuthType) => void) => {
        authAPI.loginMe(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                let {email, password, rememberMe} = response.data.data
                dispatch(getData( email, password, rememberMe))
            }
        });
    }
}

export type ActionsAuthType =
    ReturnType<typeof getData>|
    ReturnType<typeof setLogin>


