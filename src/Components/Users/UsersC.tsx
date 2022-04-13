import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";
import UserPhoto from '../../assets/imeges/images.jpg'
import axios from "axios";


// В React.Component зашито поведение что умеют делать все компоненты, если не написать extends React.Component
// наш объект созданный с помощью класса user не будет обладать нужными умениями чтоб реакт мог с ним взаимодействовать
export class Users extends React.Component<UsersPropsType> {

    // constructor(props:UsersPropsType) {
    //     super(props);
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //             this.props.setUsers(response.data.items)
    //         })
    // }
    // удаляем конструктор, так как если он ничего не делает кроме как конструирование свое перебрасывает классу super
    // то его можно не писать, он вызывается по умолчанию

    componentDidMount() {// метод жизнего цикла компоненты которая вызывается только олин раз когда перересуется
        // компонента и передаем ей axios запрос
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged =(pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

// каждый класс должен определить метод render потому что react будет требовать от этого объекта получить jsx разметку

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(m => {
                    return <span onClick={() => this.onPageChanged(m)} className={
                        this.props.currentPage === m ? styles.selectedPage : ""}> {m}</span>
                })}
                {/*<span>{pagesCount}</span>*/}
                {/*<span className={styles.selectedPage}>2</span>*/}
                {/*<span>3</span>*/}
                {/*<span>4</span>*/}
            </div>
            {this.props.usersPage.map((u) => <div key={u.id}>
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
