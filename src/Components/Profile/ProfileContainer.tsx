import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {ReducerType} from "../Redux/redux-store";
import {UserType} from "../Redux/users-reducer";
import {connect} from "react-redux";
import {ProfileType, setProfileInfo} from "../Redux/profile-reducer";


type MapStatePropsType = { // тип initial state users
    profile: ProfileType | null
}
type MapDispatchPropsType = {
    setProfileInfo: (profile: ProfileType) => void
}
type ProfilePropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setProfileInfo})(ProfileContainer)