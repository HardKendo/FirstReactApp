import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = 
[
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Timur' },
    { id: 4, name: 'Ivan' },
    { id: 5, name: 'Artem' }
]

let messagesData = 
[
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' }
]

let postData = 
[
    { id: 1, post: 'Hi, how are you?', like: '15' },
    { id: 1, post: 'It\'s my first post', like: '20' }
]



ReactDOM.render(<App postData={postData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
