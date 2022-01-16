import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";




const DialogsItem = (props) => {
    let path = `/dialogs/${props.id}`
    return <div className={s.dialog + " " + s.activeItem}>
        <img src={props.ava} alt="photo"/>
        <NavLink to={path}>
            {props.name}
        </NavLink>
    </div>
}
export default DialogsItem