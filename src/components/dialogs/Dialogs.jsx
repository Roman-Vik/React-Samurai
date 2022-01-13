import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import DialogsItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";

const Dialogs = (props) => {
    // данные с сервера
    const dialog = [
        {
            id: "1",
            name: "Romych"
        },
        {
            id: "2",
            name: "Andrey"
        },
        {
            id: "3",
            name: "Svetlana"
        },
        {
            id: "4",
            name: "Sasha"
        },
        {
            id: "5",
            name: "Viktor"
        },
        {
            id: "6",
            name: "Valery"
        },
    ]
    const messages = [
        {
            id: "1",
            message: "Hi!"
        },
        {
            id: "2",
            message: "How are you?"
        },
        {
            id: "3",
            message: "Whats you like animal?"
        },
        {
            id: "4",
            message: "Yo yo yo!"
        },
        {
            id: "5",
            message: "Hello World!"
        },
        {
            id: "6",
            message: "React pizdec kak slojno"
        },
    ]

    let dialogsElements = dialog.map((dialog) => <DialogsItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = messages.map((message) => <Message message={message.message}/>)
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