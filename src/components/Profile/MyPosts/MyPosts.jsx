import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Posts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let newPostElem = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())

        props.dispatch( {
            type: "ADD-POST"
        })

    }
    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.like}/>)

    const onPostChange = () => {
        let changeText = newPostElem.current.value
        /*let action = ({type: "UPDATE-NEW-POST-TEXT", newText: changeText})*/
        let action = updateNewPostActionCreator(changeText)
        props.dispatch(action)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="5" ref={newPostElem} onChange={onPostChange}
                          value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Post remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    )
}

export default MyPosts