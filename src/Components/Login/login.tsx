import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from '../Coomman/FormsControls/FormsControls';
import {required} from "../../Validators/Validators";
import {Redirect} from "react-router";
import style from "./../Coomman/FormsControls/FormControl.module.css"


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>  {/*handleSubmit это функция callback которая нам дает редакс форма которую мы должны повесить на событие формы onSubmit,
    у любой формы есть событие onSubmit*/}

        <div>
            <Field placeholder={'Email'} name={"email"} component={Input} validate={[required]}/> {/*Field это специальная компонента из библиотеки редакc форм
            как контейнерная компонента которая рисует другую компоненту input передает свои пропсы прокидывает дальше своему детю инпут */}
        </div>
        <div>
            <Field placeholder={'Password'} name={"password"} component={Input} validate={[required]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={"rememberMe"} component={Input} validate={[required]}/>Remember me
        </div>
        {console.log(props.error)}
        {props.error&&<div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({ // оборачиваем нашу компоненту loginForm  HOCам reduxForm, которая как и connect
// вызыввается дважды: первый раз когда вызываем и настраиваем которая вернет HOC и этим хоком с помощью замыкания
// настроеным обернем свою форму и вокруг формы образуется контейнерная компонента которая будет заниматься диспатчем со стейтем

    form: 'login'// присваевываем уникальное имя нашей форме
})(LoginForm)

export type LoginPropsType = {
    loginThunkCreator: (login: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => { // formData приходят все значения из формы
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/> {/*  передаем в нашу контейнерную компоненту onSubmit которую вызовет
         handleSubmit из нашей формы  */}
    </div>
}
