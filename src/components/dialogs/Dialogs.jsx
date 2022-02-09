import React from "react";
import s from "./Dialogs.module.css"
import DialogsItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";
import {updateNewMessageBodyCreator, sendMessageCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let linkInElem = React.createRef()
    let addMessage = () => {
        alert(linkInElem.current.value)
    }
    let dialogsElements = state.dialogs.map((dialog) => <DialogsItem ava={dialog.ava} name={dialog.name}
                                                                     id={dialog.id}/>)
    let messagesElements = state.messages.map((message) => <Message message={message.message}/>)


    //Достаем из store(state) данные которые передадим в textarea
    let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (event) => {
        let body = event.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body)) //

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {
                    dialogsElements
                }
            </div>
            <div className={s.messages}>
                <div>{messagesElements} </div>
                <div>
                    <textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message">
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs