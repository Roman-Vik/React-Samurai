import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/state";

export let renderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={store.getState()}
                     addPost={store.addPost.bind(store)}
                     updatePostText={store.updatePostText.bind(store)}/>
            </React.StrictMode>,
        </Router>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(renderEntireTree)
reportWebVitals();
