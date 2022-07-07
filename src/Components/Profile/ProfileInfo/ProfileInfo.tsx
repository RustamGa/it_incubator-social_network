import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../../Coomman/Preloader";
import { ProfileStatus } from "./ProfileStatus";


type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile)
        return <Preloader/>
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://cdn.ttgtmedia.com/visuals/ComputerWeekly/Hero%20Images/Facebook-social-media-icon-like-adobe.jpeg'*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    {props.profile.fullName ?
                        <div>
                            Full Name
                            <span>: {props.profile.fullName}</span>
                        </div>
                        : null
                    }
                    {props.profile.aboutMe ? <div>
                            About me
                            <span>
                            : {props.profile.aboutMe}
                        </span>
                        </div> :
                        null}
                    {props.profile.contacts.facebook ? <div>
                            Facebook
                            <span>
                            : {props.profile.contacts.facebook}
                        </span>
                        </div> :
                        null}
                    {props.profile.contacts.vk ? <div>
                            VK
                            <span>
                            : {props.profile.contacts.vk}
                        </span>
                        </div> :
                        null}
                    {props.profile.contacts.github ? <div>
                            Github
                            <span>
                            : {props.profile.contacts.github}
                        </span>
                        </div> :
                        null}
                    {props.profile.contacts.instagram ? <div>
                            Instagram
                            <span>
                            : {props.profile.contacts.instagram}
                        </span>
                        </div> :
                        null}
                    {props.profile.contacts.twitter ? <div>
                            Twitter
                            <span>
                            : {props.profile.contacts.twitter}
                        </span>
                        </div> :
                        null}
                    {props.profile.contacts.youtube ? <div>
                            Youtube
                            <span>
                            : {props.profile.contacts.youtube}
                        </span>
                        </div> :
                        null}
                    {props.profile.lookingForAJob
                        ? <div>
                            Looking for job
                            <span>: Yes</span>
                        </div>
                        : <span>No</span>
                    }
                    {props.profile.lookingForAJobDescription ? <div>
                            looking for a job description
                            <span>
                            : {props.profile.lookingForAJobDescription}
                        </span>
                        </div> :
                        null}
                </div>
                <ProfileStatus/>
            </div>
        </div>
    )
}