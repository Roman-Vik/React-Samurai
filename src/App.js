import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";


const App = (props) => {


    return (

            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}

                            /*posts={props.state.profilePage.posts}*/ />}/>
                        <Route path="/dialogs" element={<Dialogs
                            state={props.state.dialogsPage}
                            /*messages={props.state.dialogsPage.messages}
                            dialogs={props.state.dialogsPage.dialog}*/ />}/>
                    </Routes>
                </div>
            </div>
    );
}
export default App;
