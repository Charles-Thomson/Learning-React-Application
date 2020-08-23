import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" >Navbar</a>
            
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <Link to='/'>
                    <a class="nav-link active" >Home <span class="sr-only">(current)</span></a>
                </Link>
                <Link to='/scalculator'>
                    <a class="nav-link" >Suffix Calculator</a>
                </Link>
                <Link to='/hangman'>
                    <a class="nav-link" >Hang Man</a>
                </Link>
                <Link to='/todolist'>
                    <a class="nav-link" >To Do List</a>
                </Link>
                </div>
            </div>
            </nav>
         );
    }
}
 
export default NavBar;