import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Posts";


const MyPosts = (props) => {

let newPostElem = React.createRef()

let addPost = () =>{
    props.addPost()
    // props.updateNewPostText("")// Занулить textarea нужно в самом state
}

let onChange = () => {
    let newText = newPostElem.current.value
    props.updateNewPostText(newText)

}



    let postsElements = props.posts.map((p)=> <Post message={p.message} like={p.like}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea onChange={onChange} value={props.newPostText}  name="" id="" cols="30" rows="5" ref={newPostElem}/>
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