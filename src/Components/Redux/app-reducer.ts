import {authAPI} from "../Api/api";
import {authThunkCreator} from "./auth-reducer";
import {TypedDispatch} from "./redux-store";

const SET_INITIALIZED = 'network/app/SET-INITIALIZED'


export type InitializedType = {
    initialized: boolean
}

let initialState: InitializedType = {
    initialized:false
}


export const appInitializedReducer = (state: InitializedType = initialState, action: ActionsAppType): InitializedType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized:true
            }
        default:
            return state;

    }
}

export const setInitialized = () => ({
    type: SET_INITIALIZED,
} as const)

export const appInitializedThunkCreator = () => {
    return (dispatch: TypedDispatch) => {
        let promise = dispatch(authThunkCreator()) // для инициализации приложения нам необходимо подписаться на промис
        // который возвращает authThunkCreator дожидаемся когда они зарезолвятся и диспатчим setInitialized
        Promise.all([promise]).then(() => {
            return dispatch(setInitialized())
        })
    }
}

export type ActionsAppType =
    ReturnType<typeof setInitialized>|
    ReturnType<typeof setInitialized>