import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
  return (
      <div className={s.profileItem}>
        <img src="https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2447&q=80"
            alt=""/>
        <div className={s.descriptionBlock}>ava + description</div>
      </div>
  )
}

export default ProfileInfo