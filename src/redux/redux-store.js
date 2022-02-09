import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navBarReducer from "./navBar-reducer";

let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage:dialogsReducer,
    navBar:navBarReducer,
})


let store = createStore(reducersPack);

export default store