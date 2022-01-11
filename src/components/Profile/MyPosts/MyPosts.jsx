import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Posts";


const MyPosts = () => {
    let posts =
        [
        {
            id: "1",
            message:"Hi,how are you?",
            like: 15
        },
        {
            id: "2",
            message:"It`s my first post?",
            like: 20
        }
    ]

    let postsElements = posts.map((p)=> <Post message={p.message} like={p.like}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea name="" id="" cols="30" rows="5">git</textarea>
                <div>
                    <button>Add post</button>
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