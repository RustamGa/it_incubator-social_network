import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


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