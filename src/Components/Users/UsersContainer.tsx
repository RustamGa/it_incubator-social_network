import React from "react";
import {
    ReducerType,
} from "../Redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {
    ActionsUsersPageType,
    follow, setCurrentPage, setTogglePreloader, setTotalUsersCount,
    setUsers,
    unFollow,
    UsersPageType,
    UserType
} from "../Redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from '../../assets/imeges/preloader.gif'
import {Preloader} from "../Coomman/Preloader";


type MapStatePropsType = { // тип initial state users
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean

}
type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (usersCount: number) => void
    setTogglePreloader: (isFetching: boolean) => void
}


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
        &count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setTogglePreloader(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}
        &count=${this.props.pageSize}`, {withCredentials: true}).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTogglePreloader(false)
        })
    }

// каждый класс должен определить метод render потому что react будет требовать от этого объекта получить jsx разметку

    render() {
// презентационная компонента Users
        return (
            <>
                {this.props.isFetching ?
                    <Preloader/> : null}

                <Users users={this.props.usersPage} pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage} follow={this.props.follow}
                       unFollow={this.props.unFollow} onPageChanged={this.onPageChanged}/>
            </>
        )
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
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch: (action: ActionsUsersPageType) => void): MapDispatchPropsType => {
//     return {
//         follow: (userID: number) => {
//             dispatch(follow(userID));
//         },
//         unFollow: (userID: number) => {
//             dispatch(unFollow(userID));
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users));
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCount(usersCount))
//         },
//         setTogglePreloader: (isFetching) => {
//             dispatch(setTogglePreloader(isFetching))
//         }
//     }
// }


// const connector = connect(mapStateToProps, mapDispatchToProps)
// export type PropsFromRedux = ConnectedProps<typeof connector>

// userContainer классовая  контейнерная компонента которую оборачиваем коннектом
export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setTogglePreloader,
})(UsersContainer);
