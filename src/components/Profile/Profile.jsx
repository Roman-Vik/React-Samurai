import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
      <div className={s.content}>
        <img className={s.banner}
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80"
            alt=""/>
        <div className="">ava+ description</div>
       <MyPosts/>
      </div>
  )
}

export default Profile