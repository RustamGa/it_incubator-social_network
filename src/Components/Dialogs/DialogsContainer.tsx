import React from "react";
import {
    ReducerType,
} from "../Redux/redux-store";
import {
    ActionDialogsType,
    addDialogsTextTypeCreator, DialogsPageType
} from "../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessageClick: (message: string) => void
}

export type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: ReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: (action: ActionDialogsType) => void): MapDispatchPropsType => {
    return {
        sendMessageClick: (message) => {
            dispatch(addDialogsTextTypeCreator(message));
        },
    }
}
compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs) // функция compose с помощью
// которой мы можем целевую компоненту передавать в другие функции оброботчики HOC по цепочке избавляясь от лишеного кода

// export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent))
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
// export default DialogsContainer

// export const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent), withAuthRedirect)(Dialogs)
export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)