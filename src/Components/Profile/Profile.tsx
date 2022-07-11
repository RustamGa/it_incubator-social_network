import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../Redux/profile-reducer";


type PropsType = {
    profile: ProfileType | null
    status: string
    upDateProfileStatusThunkCreator: (status: string) => void
}
export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         upDateProfileStatusThunkCreator={props.upDateProfileStatusThunkCreator}
            />
            <MyPostsContainer
                // state={props.state}
                // dispatch={props.dispatch}

            />
        </div>
    )
}