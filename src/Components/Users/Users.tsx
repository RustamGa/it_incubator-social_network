import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.looper.com/img/gallery/the-real-reason-arnold-schwarzenegger-wasnt-in-predator-2/intro-1615557231.jpg',
                followed: false,
                userName: 'Arnold',
                status: 'Yo',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://pbs.twimg.com/media/ErulCe_XMAIKCCg.jpg',
                followed: true,
                userName: 'Dillon',
                status: 'I`m the best',
                location: {city: 'Minsk', country: 'Belarus'}
            },
        ])
    }
    return <div>
        {props.usersPage.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={styles.usersPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => props.follow(u.id)}>unfollow</button> :
                        <button onClick={() => props.unFollow(u.id)}>follow</button>}
                </div>
            </span>
            <span>
    <span>
        <div>{u.userName}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{u.location.country}</div>
        <div>{u.location.city}</div>
    </span>
</span>
        </div>)
        }
    </div>
}