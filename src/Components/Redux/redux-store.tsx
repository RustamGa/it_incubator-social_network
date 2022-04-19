import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";

let rootReducer = combineReducers(
    {
        postsPage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage:usersReducer
    }
)

export type ReducerType = ReturnType<typeof rootReducer>//типизация стейта всего приложения
// export type RootReduxStoreType =  typeof store

export let store = createStore(rootReducer);