import React, { Component } from 'react';


const dialogStyles = {
    width: '400px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    disply: 'flex',
    flexDirection: 'column'

};

const dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


class addtodolistelement extends Component {
    state = {  }
    render() { 
        let dialog =(
            <div style={dialogStyles}>
                <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>
                <div><span>Add new task </span> </div>
                <input id="newTaskInput" className="text-center" type="text" />
                <button id="submitNewTask" className="badge-secondary m-2" onClick={() => this.props.onNewTask(document.getElementById('newTaskInput').value)}>Save</button>

            </div>

        );
        if(! this.props.newTaskWindow){
            dialog = null;
        } 
        return (
            <div>
                {dialog}
            </div>
            
          );
    }
}
 
export default addtodolistelement;