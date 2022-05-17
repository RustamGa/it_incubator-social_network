const GET_DATA = 'GET_DATA'


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
                isAuth:true
            }
        default:
            return state;

    }
}
export const getData = (id: null | number,
                        email: null | string,
                        login: null | string) => ({
    type: GET_DATA,
    data: {id, email, login}
} as const)


export type ActionsAuthType =
    ReturnType<typeof getData>
