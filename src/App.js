import React, { Component } from 'react';
import NavBar from './components/navbar';
import HomePage from './components/home'
import SCalulator from './components/scalculator';
import HangMan from './components/hangman';
import ToDoList from'./components/todolist';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




class App extends Component {

render(){
  return(
    <Router>
      <React.Fragment>
      <NavBar />
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/hangman" component={HangMan}/>
          <Route path="/scalculator" component={SCalulator}/>
          <Route path="/todolist" component={ToDoList}/>
        </Switch>
      </React.Fragment>
    </Router>


  );
}

}

export default App;
