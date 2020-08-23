import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Hangman from './components/hangman';
import SCalculator from './components/scalculator';
import ToDoListElement from './components/todolistelement'
import ToDoList from './components/todolist'
import DialogBox from './components/dialogbox'

ReactDOM.render(<App />,document.getElementById('root'));


serviceWorker.unregister();
