import React from 'react';
import reportWebVitals from './reportWebVitals';
import {renderEntireTree} from "./render";
import state from "./redux/state";

renderEntireTree(state)

reportWebVitals();
