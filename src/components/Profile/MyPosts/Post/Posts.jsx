import React from "react";
import s from "./Posts.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://zenitbol.ru/avatar/04/616426.jpg" alt="ava"/>
            {props.message}
            <div className={s.like} >
                <img src="https://cdn.pixabay.com/photo/2020/09/30/07/48/heart-5614865_1280.png" alt="like"/>
                <span>{props.like}</span>
            </div>
        </div>
    )
}

export default Post