import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {StoreType} from "../Redux/redux-store";

type PropsType = {
    store: StoreType
}
export const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}