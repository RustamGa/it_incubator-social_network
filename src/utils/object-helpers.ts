import {ActionsUsersPageType, UsersPageType, UserType} from "../Components/Redux/users-reducer";


export const updateObjectArray = (state:UsersPageType, action:number, objPropsName:string, newObjProps:any ) => {
   return  state.users.map((u:UserType) => {
        // @ts-ignore
       if (u[objPropsName] === action) {
            return {
                ...u, ...newObjProps
            }
        }
        return u;
    })
}