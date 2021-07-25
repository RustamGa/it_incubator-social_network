import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './Redux/State';
import {rerenderEntireTree} from "./render";


rerenderEntireTree(state);

reportWebVitals();
