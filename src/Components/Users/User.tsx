import React from "react";
import {NavLink} from "react-router-dom";
import UserPhoto from '../../assets/imeges/images.jpg'
import styles from "./users.module.css";

type UserPropsType = {
    user: {
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
    followingInProgress: Array<number>
    followThunkCreator: (userId: number) => void
    unFollowThunkCreator: (userId: number) => void
}
export const User = ({user,followingInProgress, unFollowThunkCreator, followThunkCreator }:UserPropsType) => {
    return <div key={user.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                <img  src={UserPhoto} className={styles.usersPhoto}/>
                    </NavLink>
            </div>
            <div>
                {user.followed ?
                    <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unFollowThunkCreator(user.id)
                            }}

                    >Follow
                    </button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                  followThunkCreator(user.id)
                              }}
                    >Unfollow
                    </button>}
            </div>
        </span>
            <span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
        </div>
}