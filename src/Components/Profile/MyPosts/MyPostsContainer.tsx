import React from "react";
import {ActionsProfileType, addPostTypeCreator, updateNewPostTextTypeCreator} from "../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {RootReduxStateType} from "../../Redux/redux-store";
import {ActionDialogsType} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";

//
// type PropsType = {
//     state: RootReduxStateType
//     dispatch: (action: ActionDialogsType | ActionsProfileType) => void
// }

// export const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//                     const addPost = () => {
//                         store.dispatch(addPostTypeCreator())
//                     }
//                     const updateNewPostText = (newText: string) => store.dispatch(updateNewPostTextTypeCreator(newText))
//                     return <MyPosts
//                         addPost={addPost}
//                         updateNewPostText={updateNewPostText}
//                         newPostMessage={state.postsPage.newPostMessage}
//                         postData={state.postsPage.postData}/>
//                 }
//             }
//         </StoreContext.Consumer>)
// }
const mapStateToProps = (state:RootReduxStateType) => {
return {
    newPostMessage:state.postsPage.newPostMessage,
    postData:state.postsPage.postData
}
}
const mapDispatchToProps = (dispatch:(actions:ActionsProfileType)=>void) => {
    return {
        updateNewPostText:(newText:string) => {
            dispatch(updateNewPostTextTypeCreator(newText));
        },
        addPost:()=> {
            dispatch(addPostTypeCreator());
        }
    }

}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)