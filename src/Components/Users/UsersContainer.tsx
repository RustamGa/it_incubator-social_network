import React from "react";
import {
    ReducerType,
} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    ActionsUsersPageType,
    followTypeAC, setCurrentPageTypeAC, setTotalUsersCountTypeAC,
    setUsersTypeAC,
    unFollowTypeAC,
    UsersPageType,
    UserType
} from "../Redux/users-reducer";
import {Users} from "./UsersC";


type MapStatePropsType = { // тип initial state users
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number

}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount:(usersCount:number)=> void
}
export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: ReducerType): MapStatePropsType => { // возвращает частичку стейта,
    // которую мы достаем из reducer
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,

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
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageTypeAC(currentPage))
        },
        setTotalUsersCount:(usersCount)=>{
            dispatch(setTotalUsersCountTypeAC(usersCount))
        },

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
