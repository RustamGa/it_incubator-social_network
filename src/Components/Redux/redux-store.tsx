import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers(
    {
        postsPage: profileReducer,
        dialogsPage: dialogsReducer
    }
)

export type ReducerType = typeof reducers
export type RootReduxStateType = ReturnType<ReducerType>

export let store = createStore(reducers);