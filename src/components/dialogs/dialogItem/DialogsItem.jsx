import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";




const DialogsItem = (props) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + " " + s.activeItem}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
            <img className={s.photoProfile} src={props.ava} alt="photo"/>
    </div>
    )
}
export default DialogsItem