import React from "react";
import {
    ReducerType,
} from "../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {
    ActionsUsersPageType,
    followTypeAC, setCurrentPageTypeAC, setTotalUsersCountTypeAC,
    setUsersTypeAC,
    unFollowTypeAC,
    UsersPageType,
    UserType
} from "../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";


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

type OwnPropsType = {}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType


class UsersContainer extends React.Component<UsersPropsType> {

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

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

// каждый класс должен определить метод render потому что react будет требовать от этого объекта получить jsx разметку

    render() {

        return <Users users={this.props.usersPage} pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage} follow={this.props.follow}
                      unFollow={this.props.unFollow} onPageChanged={this.onPageChanged}/>
//
    }
}

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
// const connector = connect(mapStateToProps, mapDispatchToProps)
// export type PropsFromRedux = ConnectedProps<typeof connector>
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
