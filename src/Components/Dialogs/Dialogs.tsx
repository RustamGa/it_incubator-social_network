import React from "react";
import s from "./Dialogs.module.css"
export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={`${s.dialogs} ${s.active}`}>
                    Amir
                </div>
                <div className ={s.dialog}>
                    Rustam
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>I'm fine</div>
            </div>
        </div>
    )
}