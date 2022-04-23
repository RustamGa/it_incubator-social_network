import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {ReducerType} from "../Redux/redux-store";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {ProfileType, setProfileInfo} from "../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router/ts4.0";


type MapStatePropsType = { // тип initial state users
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setProfileInfo: (profile: ProfileType) => ReturnType<typeof setProfileInfo>
}
type PropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string,
}
type ProfileContainerPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId){
            userId='2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setProfileInfo(response.data);

            })
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

export default connect(mapStateToProps, {setProfileInfo})(WithUrlDataContainerComponent)