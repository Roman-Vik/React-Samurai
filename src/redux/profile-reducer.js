const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState =  {
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
    newPostText: '1'
}

const profileReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: "7",
                message: state.newPostText,
                like: 45
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            state.newPostText = " "
            return state
        default :
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostActionCreator = (changeText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: changeText,
    }
}
export default profileReducer