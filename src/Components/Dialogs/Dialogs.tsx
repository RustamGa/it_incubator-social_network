import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {Messages} from "./Messages/Messages";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../Coomman/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/Validators/Validators";


type FormDataType = {
    newMessage: string
}

const AddMessageReduxForm = reduxForm<FormDataType>({form: "addNewMessage"})(AddMessageDialogsForm)
const maxLength50 = maxLengthCreator(50)
function AddMessageDialogsForm(props: InjectedFormProps<FormDataType>) {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="enter your message"
                   name={"newMessage"}
                   validate={[required, maxLength50]}
                   component={Textarea}>
            </Field>
        </div>
        <div>
            <button>send</button>
        </div>
    </form>;
}

export const Dialogs = (props: DialogsPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.sendMessageClick(formData.newMessage)
    }

    const dialogs = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messages = props.dialogsPage.messagesData.map(m => <Messages message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{messages}</div>
                <AddMessageReduxForm onSubmit={onSubmit}/>

            </div>
        </div>

    )
}
