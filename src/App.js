import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import store from "./redux/store";

const App = (props) => {
    debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile" element={
                        <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" element={<Dialogs
                        store={store}
                    />}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
