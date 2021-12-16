import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let reducers = combineReducers(
    {
        postsPage: profileReducer,
        dialogsPage: dialogsReducer
    }
)
type ReducerType = typeof reducers
export type StoreType = ReturnType<ReducerType>

export let store = createStore(reducers);