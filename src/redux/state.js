    import React from "react";

 let renderEntireTree = () => {
     console.log("State was changes")
 }


let state = {
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
        ]
    },
    navBar: {},
}

window.state = state

export const addPost = () => {
    let newPost = {
        id: "7",
        message: state.profilePage.newPostText,
        like: 45
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    renderEntireTree(state)
}

export const updatePostText = (newText) => {
state.profilePage.newPostText = newText
    renderEntireTree(state) // отрисоввываем снова
}

export const subscribe = (observer)=> {
renderEntireTree = observer //наблюдатель  паттерн
}


export default state