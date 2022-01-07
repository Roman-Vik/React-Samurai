import React from "react";
import s from "./NavBar.module.css"

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div><a href="/profile" className={`${s.item} ${s.elem}`}>Profile</a></div>
            <div><a href="/dialogs">Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
    )
}

export default NavBar