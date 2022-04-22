import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../Redux/profile-reducer";


type PropsType = {
   profile:ProfileType | null
}
export const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // state={props.state}
                // dispatch={props.dispatch}

            />
        </div>
    )
}