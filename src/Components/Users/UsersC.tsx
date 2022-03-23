import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";
import UserPhoto from '../../assets/imeges/images.jpg'
import axios from "axios";


// В React.Component зашито поведение что умеют делать все компоненты, если не написать extends React.Component
// наш объект созданный с помощью класса user не будет обладать нужными умениями чтоб реакт мог с ним взаимодействовать
export class Users extends React.Component<UsersPropsType> {
    constructor(props:UsersPropsType) { // так как объект конструируется только один раз и потом возвращается jsx,
        // в случае когда что то происходит он вызывает только render, а constructor вызывается только один раз и сохраняется
        // в памяти react, и поэтому мы можем с помощью конструктора сделать запрос на сервер для получения users
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            })

    }
    getUsers = () => {

    }
// каждый класс должен определить метод render потому что react будет требовать от этого объекта получить jsx разметку
render() {
    return <div>
        {this.props.usersPage.users.map((u) => <div key={u.id}>
            <span>
                <div>
                    <img src={UserPhoto} className={styles.usersPhoto}/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => this.props.follow(u.id)}>unfollow</button> :
                        <button onClick={() => this.props.unFollow(u.id)}>follow</button>}
                </div>
            </span>
            <span>
    <span>
        <div>{u.name}</div>
        <div>{u.status}</div>
    </span>
    <span>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
    </span>
</span>
        </div>)
        }
    </div>;
}
}
