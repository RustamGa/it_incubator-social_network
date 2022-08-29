import React from "react";
import {ReducerType} from "./redux-store";
import {createSelector} from "reselect";


export const getUsersSelector = (state: ReducerType) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
        return users
    }
)

export const getPageSize = (state: ReducerType) => {
    return state.usersPage.pageSize
}

export const getTotalUserCount = (state: ReducerType) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: ReducerType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: ReducerType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: ReducerType) => {
    return state.usersPage.followingInProgress
}
