import {combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import {authReducer} from "./auth-reducer";

let rootReducer = combineReducers(
    {
        postsPage: profileReducer,
        dialogsPage: dialogsReducer,
        usersPage:usersReducer,
        auth:authReducer
    }
)

export type ReducerType = ReturnType<typeof rootReducer>//типизация стейта всего приложения
// export type RootReduxStoreType =  typeof store


export let store = createStore(rootReducer);
//@ts-ignore
window.store=store

