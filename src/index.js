import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import state, {addPost, updatePostText, subscribe} from "./redux/state"

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={state} addPost={addPost}  updatePostText={updatePostText}/>
            </React.StrictMode>,
        </Router>,
        document.getElementById('root')
    );
}
renderEntireTree(state)
subscribe(renderEntireTree)
reportWebVitals();
