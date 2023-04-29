import { createSlice, nanoid } from "@reduxjs/toolkit"
//import { nanoid } from "@reduxjs/toolkit"
import { sub } from 'date-fns'

/*
This is a JavaScript code that creates a new Date object representing a time 10 minutes 
before the current time, and then formats it as an ISO string.

Here's how it works:

new Date() creates a new Date object that represents the current date and time.

sub(new Date(), { minutes: 10 }) uses the sub function to subtract 10 minutes 
from the current date and time, creating a new Date object representing the
 time 10 minutes ago.

.toISOString() formats the Date object as an ISO 8601 string, which 
represents a date and time in a standardized format like "2023-04-29T12:30:00.000Z",
 with the "Z" indicating that the time is in UTC (Coordinated Universal Time).
So, the final result of this code is an ISO string representing a time 10 
minutes before the current time. This can be useful for various purposes, 
such as for logging, data analysis, or scheduling tasks that 
need to run periodically.

*/
const initialState = [
    {
        id: '1', title: 'Learning Redux Toolkit', content: "I've heard good things", date: sub(new Date(), { minutes: 10 }).toISOString(),

        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2', title: 'Slices...', content: "The more I say slice,the more I want pizza.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),

        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }]


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

        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },

            prepare(title, content, userId) {
                return {
                    payload: {

                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,

                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }

            }

        },
        reactionAdded(state, action) {
            //deconstruct postId and reaction from payload
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }

        }



    }
})
//if shape of state changes only need to change it in slice not in all components
export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions
export default postsSlice.reducer;