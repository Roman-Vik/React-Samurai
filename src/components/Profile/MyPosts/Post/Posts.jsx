import React from "react";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                <textarea> </textarea>
                <button>Add post</button>
                <button>Post remove</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <img className={s.ava} src="https://zenitbol.ru/avatar/04/616426.jpg" alt="ava"/>
                    post1
                </div>
                <div className={s.item}>
                    post2
                </div>
                <div className={s.item}>
                    post3
                </div>
                <div className={s.item}>
                    post4
                </div>
            </div>
        </div>
    )
}

export default MyPosts