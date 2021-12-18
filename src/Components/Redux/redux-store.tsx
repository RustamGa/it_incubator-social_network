import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers(// комбайним редьюсер и он склеивается в один общий и
// таким образом можем достать из store все что нужно
    {
        postsPage: profileReducer,
        dialogsPage: dialogsReducer
    }
)
type ReducerType = typeof reducers
export type StoreType = ReturnType<ReducerType> & Store// типизировать store нужно две типизации:
// то что возвращают редьюсеры - диалоги и профайл,  и вшитые в redux методы.

export let store: StoreType = createStore(reducers);