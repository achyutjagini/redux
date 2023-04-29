import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postsSlice'
//will get empty array if don't add key and reducer in store
// / needed add the posts slice with the postsReducer function to the store's state.

//posts is a global state managed using functions in postsSlice

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})