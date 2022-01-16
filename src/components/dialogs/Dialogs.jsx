import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogsItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map((dialog) => <DialogsItem ava={dialog.ava} name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.state.messages.map((message) => <Message message={message.message}/>)
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs__items}>

                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    )
}

export default Dialogs