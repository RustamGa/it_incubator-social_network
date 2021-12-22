import React from 'react'
import {RootReduxStoreType, store} from "./Components/Redux/redux-store";
const StoreContext =React.createContext({} as RootReduxStoreType);
export type ProviderType = {
    store:RootReduxStoreType
    children:any
}
export const Provider = (props:ProviderType) => {
    return <StoreContext.Provider value ={props.store}>
        {props.children}
    </StoreContext.Provider>
}
export default StoreContext