import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}
export default App;
