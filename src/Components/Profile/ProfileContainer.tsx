import React from "react";
import {Profile} from "./Profile";
import {ReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileType} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router/ts4.0";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";


type MapStatePropsType = { // тип initial state users
    profile: ProfileType | null
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
    }
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent))