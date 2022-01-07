import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Posts";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea name="" id="" cols="30" rows="5"></textarea>
                <button>Add post</button>
                <button>Post remove</button>
            </div>
            <div className={s.posts}>
               <Post message="Hi,how are you?" like={20}/>
               <Post message="It`s my first post!" like={15}/>
            </div>
        </div>
    )
}

export default MyPosts