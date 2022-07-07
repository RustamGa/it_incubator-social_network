import React from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../../Coomman/Preloader";


type ProfileStatusPropsType = {
    // status:string
}

export class ProfileStatus extends React.Component {

    state = {
        editMode: true,
        title: ''
    }

    activateEditMode() {
        this.setState(
            {editMode: true}
        );
    }

    deActivateEditMode() {
        this.setState({editMode: false}
        );
    }

    render() {
        return (
            this.state.editMode
                ? <div>
                    <input autoFocus={true} onBlur={this.deActivateEditMode.bind(this)} value={'Hello'}/>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{'Hello'}</span>
                </div>
        )
    }

}