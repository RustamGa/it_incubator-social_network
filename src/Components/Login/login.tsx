import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";



type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

export const LoginForm = (props:InjectedFormProps<FormDataType>) => {
    return <form onSubmit={props.handleSubmit}>  {/*handleSubmit это функция callback которая нам дает редакс форма которую мы должны повесить на событие формы onSubmit,
    у любой формы есть событие onSubmit*/}
        <div>
            <Field placeholder={'Login'} name = {"login"} component = {"input"}/> {/*Field это специальная компонента из библиотеки редакc форм
            как контейнерная компонента которая рисует другую компоненту input передает свои пропсы прокидывает дальше своему детю инпут */}
        </div>
        <div>
            <Field placeholder={'Password'} name={"password"} component = {"input"}/>
        </div>
        <div>
            <Field type={'checkbox'} name = {"rememberMe"} component = {"input"}/>Remember me
        </div>
        <div>
            <button> Login</button>
        </div>
    </form>
}

const LoginReduxForm= reduxForm<FormDataType>({ // оборачиваем нашу компоненту loginForm  HOCам reduxForm, которая как и connect
// вызыввается дважды: первый раз когда вызываем и настраиваем которая вернет HOC и этим хоком с помощью замыкания
// настроеным обернем свою форму и вокруг формы образуется контейнерная компонента которая будет заниматься диспатчем со стейтем

    form: 'login'// присваевываем уникальное имя нашей форме
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData:FormDataType) => { // formData приходят все значения из формы
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit = {onSubmit}/> {/*  передаем в нашу контейнерную компоненту onSubmit которую вызовет
         handleSubmit из нашей формы  */}
    </div>
}