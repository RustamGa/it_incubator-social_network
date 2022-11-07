import React from 'react';
import {
    addPostTypeCreator,
    deletePostAC,
    PostsPageType, PostsType,
    profileReducer,
    ProfileType,
    setProfileInfoAC, setProfileStatusAC
} from "./profile-reducer";

let startState: PostsPageType = {
    postData: [],
    profile: null,
    status: ""
}
beforeEach(() => {
    startState = {
        postData: [
            {id: 1, message: 'My first post', likesCount: 2},
            {id: 2, message: 'Yo', likesCount: 10},
            {id: 3, message: 'I`ll be back!', likesCount: 10}
        ],
        profile: null,
        status: ""
    }
})

test('the post should be added', () => {
    const action = addPostTypeCreator("Added post")
    const endState = (profileReducer(startState, action))
    expect(endState.postData.length).toBe(4);
    expect(endState.postData[3].message).toBe("Added post");
});

test('the post should be deleted', () => {
    const action = deletePostAC(2)
    const endState = (profileReducer(startState, action))
    expect(endState.postData).toEqual([
        {id: 1, message: 'My first post', likesCount: 2},
        {id: 3, message: 'I`ll be back!', likesCount: 10}
    ])
    expect(endState.postData.length).toBe(2);
});