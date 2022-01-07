import React from "react";
import s from "./Profile.module.css"
const Profile = () => {
  return (
      <div className={s.content}>
        <img className={s.header}
            src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80"
            alt=""/>
        <div className="">ava+ description</div>
        <div className="">my post
          <div>news post</div>
        </div>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
  )
}

export default Profile