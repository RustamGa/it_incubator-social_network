const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UserType = {
    id: number
    photoUrl: string
    followed: boolean
    userName: string
    status: string
    location: {
        city: string,
        country: string
    }
}
export type UsersPageType = {
    users: Array<UserType>
}
let initialState = {
    users: []
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersPageType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {
                            ...u, followed: false
                        }
                    }
                    return u;
                })
            };
        case
        UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                        if (u.id === action.id) {
                            return {
                                ...u, followed: true
                            }
                        }
                        return u;
                    }
                )
            }
        case
        SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}
export const followTypeAC = (userID: number) => ({
    type: FOLLOW,
    id: userID
} as const)
export const unFollowTypeAC = (userID: number) => ({
    type: UNFOLLOW,
    id: userID
} as const)
export const setUsersTypeAC = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
} as const)

export type ActionsUsersPageType =
    ReturnType<typeof followTypeAC>
    | ReturnType<typeof unFollowTypeAC>
    | ReturnType<typeof setUsersTypeAC>