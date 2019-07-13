import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogz = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Francua'},
    {id: 3, name: 'Juan'},
]

let messagez = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Salut'},
    {id: 3, message: 'Hola'},
]

let allPosts = [
    {message: 'yo', likes: '1'},
    {message: 'wtf', likes: '5'},
    {message: 'omg', likes: '20'}
]


ReactDOM.render(<App dialogz={dialogz} messagez={messagez} allPosts={allPosts} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
