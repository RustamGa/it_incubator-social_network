import s from "../Profile.module.css";
import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                New posts
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
}


