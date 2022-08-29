import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusPropsType = {
    status: string
    upDateProfileStatusThunkCreator: (status: string) => void
}

export const ProfileStatusFC = (props: ProfileStatusPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deActivateEditMode = () => {
        setEditMode(false);
        props.upDateProfileStatusThunkCreator(status)
    }
    const onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        editMode
            ? <div>
                <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode}
                       value={status}/>
            </div>
            : <div>
                <span onDoubleClick={activateEditMode}>{props.status || "----"}</span>
            </div>
    )


}