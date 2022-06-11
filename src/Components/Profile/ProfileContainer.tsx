import React from "react";
import {Profile} from "./Profile";
import {ReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileType} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router/ts4.0";
import {Redirect} from "react-router";


type MapStatePropsType = { // тип initial state users
    profile: ProfileType | null
    isAuth:boolean
}
type MapDispatchPropsType = {
    getProfileThunkCreator: (userId: string) => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string,
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }

}

const mapStateToProps = (state: ReducerType): MapStatePropsType => { // возвращает частичку стейта,
    // которую мы достаем из reducer
    return {
        profile: state.postsPage.profile,
        isAuth:state.auth.isAuth,
    }
}
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent)