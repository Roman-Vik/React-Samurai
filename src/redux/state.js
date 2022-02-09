import React from "react";
import {type} from "@testing-library/user-event/dist/type";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import navBarReducer from "./navBar-reducer";

export let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: "1",
                    message: "Hi,how are you?",
                    like: 15
                },
                {
                    id: "2",
                    message: "It`s my first post?",
                    like: 20
                }
            ],
            newPostText: 'new message'
        },
        dialogsPage: {
            dialogs: [
                {
                    ava: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: "1",
                    name: "Romych"
                },
                {
                    ava: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: "2",
                    name: "Andrey"
                },
                {
                    ava: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: "3",
                    name: "Svetlana"
                },
                {
                    ava: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: "4",
                    name: "Sasha"
                },
                {
                    ava: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: "5",
                    name: "Viktor"
                },
                {
                    ava: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                    id: "6",
                    name: "Valery"
                },
            ],
            messages: [
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
            ],
            newMessageBody: ""
        },
        navBar: {},
    },
    _callSubscriber: function () { //кто-то вызвал _callSubscriber и подписался на эти изменения
        console.log("State was changes")
    },
    getState() {
        return this._state
    },
    subscribe(observer) { // 1
        store._callSubscriber = observer //наблюдатель  паттерн
    },
    /* addPost() {
         let newPost = {
             id: "7",
             message: this._state.profilePage.newPostText,
             like: 45
         }
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newPostText = ""
         this._callSubscriber(this._state)
     },*/
    _updatePostText(newText) {
        this._state.profilePage.newPostText = newText
        store._callSubscriber(this._state) // отрисоввываем снова
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navBar = navBarReducer(this._state.navBar, action)
        this._callSubscriber(this._state)

    }
}



window.state = store
export default store


