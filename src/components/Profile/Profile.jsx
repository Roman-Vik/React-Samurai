import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/Post/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // let posts = [
    //     {
    //         id: "1",
    //         message:"Hi,how are you?",
    //         like: 15
    //     },
    //     {
    //         id: "2",
    //         message:"It`s my first post?",
    //         like: 20
    //     }
    // ]

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
    )
}

export default Profile