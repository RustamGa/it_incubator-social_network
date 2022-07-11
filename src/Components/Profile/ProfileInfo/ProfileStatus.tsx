import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"
import {ProfileType} from "../../Redux/profile-reducer";
import {Preloader} from "../../Coomman/Preloader";


type ProfileStatusPropsType = {
    status:string
    upDateProfileStatusThunkCreator:(status:string) => void
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType>{

    state = {
        editMode: false,
        status:this.props.status

    }

    activateEditMode = () => {
        this.setState(
            {editMode: true}
        );
    }

    deActivateEditMode = () => {
        this.setState({editMode: false}
        );
        this.props.upDateProfileStatusThunkCreator(this.state.status)
    }
    onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status:e.currentTarget.value
       })
    }
    render() {
        return (
            this.state.editMode
                ? <div>
                    <input onChange={this.onChangeStatus} autoFocus={true} onBlur={this.deActivateEditMode} value={this.state.status}/>
                </div>
                : <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "----" }</span>
                </div>
        )
    }

}