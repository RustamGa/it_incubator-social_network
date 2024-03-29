import React from "react";
import {ReducerType,} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setFollowingProgress,
    unFollowThunkCreator,
    UserType
} from "../Redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../Coomman/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../Redux/user-selector";


type MapStatePropsType = { // тип initial state users
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

type MapDispatchPropsType = {
    followThunkCreator: (userID: number) => void
    unFollowThunkCreator: (userID: number) => void
    setCurrentPage: (currentPage: number) => void
    setFollowingProgress: (userID: number, isFetching: boolean) => void
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void

}


export type UsersPropsType = MapStatePropsType & MapDispatchPropsType & {}


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

        const {pageSize, currentPage} = this.props // деструкторизация пропсов ( прочитать Ден Абрамов почему так рекомендуется делать)
        this.props.getUsersThunkCreator(pageSize, currentPage);
    }

    onPageChanged = (pageNumber: number) => {
        const {getUsersThunkCreator, pageSize}= this.props // деструкторизация пропсов ( прочитать Ден Абрамов почему так рекомендуется делать)
        getUsersThunkCreator(pageSize, pageNumber);
    }

// каждый класс должен определить метод render потому что react будет требовать от этого объекта получить jsx разметку

    render() {
// презентационная компонента Users
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> :
                    <Users
                        users={this.props.usersPage}
                        pageSize={this.props.pageSize}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        followThunkCreator={this.props.followThunkCreator}
                        unFollowThunkCreator={this.props.unFollowThunkCreator}
                        onPageChanged={this.onPageChanged}
                        setFollowingProgress={this.props.setFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
                    />}
            </>
        )
//
    }
}

const mapStateToProps = (state: ReducerType): MapStatePropsType => { // возвращает частичку стейта,
    // которую мы достаем из reducer
    return {
        usersPage:getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
    unFollowThunkCreator,
    followThunkCreator,
    setCurrentPage,
    setFollowingProgress,
    getUsersThunkCreator
})) (UsersContainer)


// userContainer классовая  контейнерная компонента которую оборачиваем коннектом
// export default connect(mapStateToProps, {
//     unFollowThunkCreator,
//     followThunkCreator,
//     setCurrentPage,
//     setFollowingProgress,
//     getUsersThunkCreator
// })(UsersContainer);
