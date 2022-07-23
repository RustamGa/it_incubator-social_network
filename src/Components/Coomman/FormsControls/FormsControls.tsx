import React from "react";
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import styles from './FormControl.module.css'
type FormsControlsPropsType = {
    meta:WrappedFieldMetaProps
}
export const FormControl:React.FC<FormsControlsPropsType>= ({meta, children}) => {
    const hasError = meta.touched && meta.error // выносим ошибку в отдельную переменную
    return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
        <div>
            {children}
        </div>
        {hasError && <span>
            {meta.error}
        </span>}
    </div>
}

export const Textarea = (props: WrappedFieldProps) => {
    const {input, meta, ...restProps}= props
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

export const Input = (props: WrappedFieldProps) => {
    const {input, meta,  ...restProps}= props
    return <FormControl {...props} ><input {...input}{...restProps}/></FormControl>
}


// export const Input = (props: WrappedFieldProps) => {
//
//     const hasError = props.meta.touched && props.meta.error // выносим ошибку в отдельную переменную
//
//     return <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//         <div>
//             <input {...props.input} {...props} />
//         </div>
//         {props.meta.touched && props.meta.error &&
//             <span>
//             {props.meta.error}
//         </span>}
//     </div>
// }

// const Element =(Element:React.FC<WrappedFieldProps>) => (props:WrappedFieldProps) => {
//     const hasError = props.meta.touched && props.meta.error;
//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <Element {...props.input} {...props} />
//             { hasError && <span> { props.meta.error } </span> }
//         </div>
//     );
// };
//
// export const Textarea = (props: WrappedFieldProps) => {
//     const {input, meta,  ...restProps}= props
//     return <textarea {...input}{...restProps}/>
// }
// export const Input = (props: WrappedFieldProps) => {
//     const {input, meta,  ...restProps}= props
//     return <input {...input}{...restProps}/>
// }
// const Textarea1 = Element(Textarea);
// const Textarea2 = Element(Input);
