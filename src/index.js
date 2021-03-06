import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import state from "./redux/state";
import {BrowserRouter as Router} from "react-router-dom";
import {addPost} from "./redux/state"

addPost('FLUX - Это зло!')

ReactDOM.render(
    <Router>
    <React.StrictMode>
        <App state={state} addPost={addPost}  />
    </React.StrictMode>,
    </Router>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
