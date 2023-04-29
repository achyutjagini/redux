import { useState } from "react";

//save logic for posts onclick on posts
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

/*
element. In this case, the htmlFor attribute is set to "postTitle", indicating that the label is 
associated with an input field with the id "postTitle".
*/

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)



    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    //function triggered with button to save
    const onSavePostClicked = () => {

        //if we have title and content dispatch postAdded action
        if (title && content) {

            //if we have title and content dispatch postAdded action
            dispatch(

                //structure of state handled in slice
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
            setUserId('')
        }
    }


    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)




    const usersOptions = users.map(
        user =>
        (
            <option key={user.id} value={user.id}>
                {user.name}
            </option>
        ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />

                <label htmlFor="postAuthor">Author:</label>

                {/* select dropdown */}
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {usersOptions}
                </select>


                <label htmlFor="postContent">Content:</label>

                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />

                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >Save Post</button>

            </form>
        </section>
    )
}
export default AddPostForm