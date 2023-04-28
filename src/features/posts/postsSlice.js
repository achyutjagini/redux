import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    { id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things" },
    { id: '2', title: 'Slices...',content: "The more I say slice,the more I want pizza." }]


const postsSlice = createSlice({

    //state.posts includes all the state entries
    //if it is state.posts.id it will be 1
    //same in Counter app
    name: 'posts',

    initialState,
    reducers: {
    
    //usually in react we don't mutate state
    //but we do it here
    
    //only works inside createSlice
    //emer js creates new state underneath

    postAdded(state,action){
     state.push(action.payload)
    }


    }

})
//if shape of state changes only need to change it in slice not in all components
export const selectAllPosts = (state) => state.posts;

export const {postAdded} =postsSlice.actions
export default postsSlice.reducer;