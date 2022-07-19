import React from "react";
import {Profile} from "./Profile";
import {ReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";
import {
    getProfileStatusThunkCreator,
    getProfileThunkCreator,
    ProfileType,
    upDateProfileStatusThunkCreator
} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router/ts4.0";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";


type MapStatePropsType = { // тип initial state users
    profile: ProfileType | null
    status: string
}
type MapDispatchPropsType = {
    getProfileThunkCreator: (userId: string) => void
    getProfileStatusThunkCreator: (userId: string) => void
    upDateProfileStatusThunkCreator: (status: string) => void
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
            userId = '21256'
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getProfileStatusThunkCreator(userId)
    }

    render() {

        return (
            <div>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    upDateProfileStatusThunkCreator={this.props.upDateProfileStatusThunkCreator}
                />
            </div>
        );
    }
}


const mapStateToProps = (state: ReducerType): MapStatePropsType => { // возвращает частичку стейта,
    // которую мы достаем из reducer
    return {
        profile: state.postsPage.profile,
        status: state.postsPage.status

    }
}


// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default compose<React.ComponentType>(withAuthRedirect,
    connect(mapStateToProps, {
        getProfileThunkCreator,
        getProfileStatusThunkCreator,
        upDateProfileStatusThunkCreator
    }),
    withRouter)(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getProfileThunkCreator})(WithUrlDataContainerComponent))