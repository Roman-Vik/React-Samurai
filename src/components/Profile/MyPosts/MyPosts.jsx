import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Posts";


const MyPosts = (props) => {

    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        alert(text)
    }



    let postsElements = props.posts.map((p)=> <Post message={p.message} like={p.like}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <   textarea name="" id="" cols="30" rows="5" ref={newPost} >Напиши сообщение</textarea>
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