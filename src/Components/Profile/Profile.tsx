import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {RootReduxStateType} from "../Redux/redux-store";
import {ActionDialogsType} from "../Redux/dialogs-reducer";
import {ActionsProfileType} from "../Redux/profile-reducer";

// type PropsType = {
//     state: RootReduxStateType
//     dispatch:(action:ActionDialogsType|ActionsProfileType)=>void
// }
export const Profile = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // state={props.state}
                // dispatch={props.dispatch}

            />
        </div>
    )
}