import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import store from "./redux/redux-store";

export let renderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <React.StrictMode>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     store={store}
                />
            </React.StrictMode>,
        </Router>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    renderEntireTree(state)
})
reportWebVitals();
