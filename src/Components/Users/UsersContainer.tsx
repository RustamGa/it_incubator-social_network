import React from "react";
import {
    ReducerType,
} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    ActionsUsersPageType,
    followTypeAC,
    setUsersTypeAC,
    unFollowTypeAC,
    UsersPageType,
    UserType
} from "../Redux/users-reducer";
import {Users} from "./Users";

type MapStatePropsType = {
    usersPage: UsersPageType
}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: ReducerType): MapStatePropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsUsersPageType) => void): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followTypeAC(userID));
        },
        unFollow: (userID: number) => {
            dispatch(unFollowTypeAC(userID));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersTypeAC(users));
        },
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
