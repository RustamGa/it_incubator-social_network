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
export const User = (props:UserPropsType) => {
    return <div key={props.user.id}>
        <span>
            <div>
                <NavLink to={'/profile/' + props.user.id}>
                <img
                    src={UserPhoto} className={styles.usersPhoto}/>
                    </NavLink>
            </div>
            <div>
                {props.user.followed ?
                    <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                            onClick={() => {
                                props.unFollowThunkCreator(props.user.id)
                            }}

                    >Follow
                    </button>
                    : <button disabled={props.followingInProgress.some(id => id === props.user.id)}
                              onClick={() => {
                                  props.followThunkCreator(props.user.id)
                              }}
                    >Unfollow
                    </button>}
            </div>
        </span>
            <span>
            <span>
                <div>{props.user.name}</div>
                <div>{props.user.status}</div>
            </span>
            <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
            </span>
        </span>
        </div>
}