import React from "react";
import styles from "./users.module.css";
import UserPhoto from '../../assets/imeges/images.jpg'
import {UserType} from "../Redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
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


export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                <div>
                    {pages.map(pageNumber => {
                        return (
                            <span
                                key={pageNumber}
                                onClick={() => props.onPageChanged(pageNumber)}
                                className={
                                    props.currentPage === pageNumber ? styles.selectedPage : ""}>{pageNumber}
                            </span>
                        )
                    })}
                </div>
                {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img
                            src={UserPhoto} className={styles.usersPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unFollowThunkCreator(u.id)
                                    }}

                            >Follow
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                      onClick={() => {
                                          props.followThunkCreator(u.id)
                                      }}
                            >Unfollow
                            </button>}
                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)}
            </div>
        </div>
    )
}
