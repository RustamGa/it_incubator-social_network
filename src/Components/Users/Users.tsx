import React from "react";
import styles from "./users.module.css";
import UserPhoto from '../../assets/imeges/images.jpg'
import {UserType} from "../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import {Paginator} from "../Coomman/Paginator/Paginator";
import {User} from "./User";

export type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    setFollowingProgress: (userID:number, isFetching: boolean) => void
    followingInProgress: Array<number>
}


export const Users = ({pageSize, totalUsersCount, onPageChanged, currentPage, ...props}:UsersPropsType) => { // props destructorization

    return (
        <div>
            <div>
                <Paginator pageSize={pageSize} totalUsersCount={totalUsersCount}
                           currentPage={currentPage} onPageChanged={onPageChanged}/>

                {props.users.map(u => <User
                    user={u}
                    followingInProgress={props.followingInProgress}
                    unFollowThunkCreator={props.unFollowThunkCreator}
                    followThunkCreator={props.followThunkCreator}
                />)}
            </div>
        </div>
    )
}
