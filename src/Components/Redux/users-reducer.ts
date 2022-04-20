const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_TOGGLE_PRELOADER = 'SET_TOGGLE_PRELOADER'

export type UserType = {
    id: number
    photos: {
        small: string,
        large: string
    }
    followed: boolean,
    name: string
    status: string
    location: { city: string, country: string }
}
// export type UserType = {
//     id: number
//     photos: string
//     followed: boolean
//     name: string
//     status: string
//     location: {
//         city: string,
//         country: string
//     }
// }
export type UsersPageType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: true,
}


export const usersReducer = (state: UsersPageType = initialState, action: ActionsUsersPageType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:

            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.id) {
                        return {
                            ...u, followed: true
                        }
debugger
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
                                ...u, followed: false
                            }
                        }
                        return u;
                    }
                )
            }
        case
        SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case
        SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case
        SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.usersCount
            }
        case
        SET_TOGGLE_PRELOADER:
            return {
                ...state, isFetching:action.isFetching
            }
        default:
            return state;

    }
}
export const follow = (userID: number) => ({
    type: FOLLOW,
    id: userID
} as const)
export const unFollow = (userID: number) => ({
    type: UNFOLLOW,
    id: userID
} as const)
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users: users
} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
} as const)
export const setTotalUsersCount = (usersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
} as const)

export const setTogglePreloader = (isFetching: boolean) => ({
    type: SET_TOGGLE_PRELOADER,
    isFetching
} as const)

export type ActionsUsersPageType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setTogglePreloader>