import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from "./components/header/Header";
import NavBar from "./components/nav/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const Routing = () => {
    return (
        <Router>
            <div className="app-wrapper">

                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    {/*<Profile/>*/}
                    {/*<Dialogs/>*/}
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/dialogs" element={<Dialogs/>}/>
                    </Routes>
                </div>
            </div>

        </Router>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Routing/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
