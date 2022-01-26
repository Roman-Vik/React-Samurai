import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {addPost} from "./redux/state"

addPost('FLUX - Это зло!')

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={state} addPost={addPost}/>
            </React.StrictMode>,
        </Router>,
        document.getElementById('root')
    );
}



