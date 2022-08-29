import React, {ChangeEvent} from "react";


type ProfileStatusPropsType = {
    status:string
    upDateProfileStatusThunkCreator:(status:string) => void
}
type ProfileStatusStateType = {
    editMode: boolean
    status: string
}

export class ProfileStatus extends React.Component <ProfileStatusPropsType, ProfileStatusStateType>{

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
     componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<ProfileStatusStateType>) { // не уверен в правильности типизации Readonly
             if (prevProps.status!==this.props.status){
                 this.setState({
                     status:this.props.status
                 })
             }
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