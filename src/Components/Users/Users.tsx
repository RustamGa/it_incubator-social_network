import React from "react";
import styles from "./users.module.css";
import UserPhoto from '../../assets/imeges/images.jpg'
import {UserType} from "../Redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
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
                            <button
                                onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "9d9825bb-ccb6-4efe-8fcf-e888d69867c3"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        });
                                }}
                            >Follow
                            </button>
                            : <button
                                onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "9d9825bb-ccb6-4efe-8fcf-e888d69867c3"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        });
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
