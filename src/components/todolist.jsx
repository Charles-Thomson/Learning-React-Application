import React, { Component } from 'react';
import Element from './todolistelement';
import AddNewTask from './addtodolistelement'


const dialogStyles = {
  width: '500px',
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

function fooot() {
  return null;
}


class todolist extends Component {
    state = { 
        editedTask: "",
        newTaskWindowOpen: false,
        todolist: [
            {id: 1 , task: "test name ", completed: false, taskEditorOpen: false },
            {id: 2 , task: "0", completed: false, taskEditorOpen: false},
            {id: 3 , task: "asdf", completed: false, taskEditorOpen: false},
            {id: 4 , task: "1234", completed: false, taskEditorOpen: false}
        ]
     }

     handleDelete = (taskId) => {
        console.log("Delete handler called - ", taskId)
        const updatedToDoList = this.state.todolist.filter(c => c.id !== taskId);
        this.setState({todolist: updatedToDoList});
    }

    // Make the change to the slected task
    handleEdit = (taskId, editedTask) =>{
        console.log("Edit task handler called - ", taskId);
        console.log("Edit task handler called - ", editedTask);
    
        const newList = this.state.todolist.map((element) => {
            if (element.id === taskId) {
              const updatedItem = {
                id:taskId,
                task: editedTask,
                completed: element.completed,
                taskEditorOpen: element.taskEditorOpen 
              };
       
              return updatedItem;
            }
       
            return element;
          });
          console.log(this.state.todolist[0-2]);
          this.setState({todolist: newList});
          console.table([newList]);
          
          
        }
    // Set the state of the task editor being closed
    handleOpenEditTaskDialog = (taskId) => {
        console.log("edit dialog opened in todolist taskId- ", taskId)
        const newList = this.state.todolist.map((element) => {
            if (element.id === taskId) {
              const updatedItem = {
                id: taskId,
                task: element.task,
                completed: element.completed,
                taskEditorOpen: true 
              };
       
              return updatedItem;
            }
       
            return element;
          });
          
          this.setState({todolist: newList});
        }

    // Set the state of the task editor being closed
    handleCloseEditTaskDialog = (taskId) => {
        console.log("edit dialog opened in todolist taskId- ", taskId)
        const newList = this.state.todolist.map((element) => {
            if (element.id === taskId) {
                const updatedItem = {
                id: taskId,
                task: element.task,
                completed: element.completed,
                taskEditorOpen: false
                };
        
                return updatedItem;
            }
        
            return element;
            });
            
            this.setState({todolist: newList});
        }

    handleOpenNewTaskWindow = () =>{
      this.setState({newTaskWindowOpen: true});
      console.log("New task window open");
      }

    handleCloseNewTaskWidow = () =>{
      this.setState({newTaskWindowOpen: false});
      console.log("New task window closed");

    }

    handleNewTask = (newTaskDescription) =>{
      let tasklistlength = this.state.todolist.length;
      console.log(tasklistlength);

      const newTask = {
        id: tasklistlength + 1,
        task: newTaskDescription,
        completed: false,
        taskEditorOpen: false
      };

      const newList =[...this.state.todolist, newTask];
      this.setState({todolist: newList});

      console.log(this.state.todolist);
    }

    render() { 
        
        return (
        <div style={dialogStyles}>
            <div>
                <h2>To do list</h2>
            </div>
            <div>
              <button className="btn btn-success"
                      onClick={() => this.handleOpenNewTaskWindow()}> 
                      New Task </button>
            
            </div>
            <br></br>
            <br></br>
            <div>
              <AddNewTask 
              onOpenNewTaskWindow={this.handleOpenNewTaskWindow}
              newTaskWindow={this.state.newTaskWindowOpen}
              onClose={this.handleCloseNewTaskWidow}
              onNewTask={this.handleNewTask}
              />
            </div>

            <div>
                {this.state.todolist.map(element => 
                <Element 
                key={element.id} 
                onDelete={this.handleDelete}
                onEditTask={this.handleEdit}
                onOpenEditTask={this.handleOpenEditTaskDialog}
                onCloseEditTask={this.handleCloseEditTaskDialog}
                editedTask={this.state.editedTask }
                element={element}
                selected={true} />)}
            </div>

        </div>

          );
    }

}
 
export default todolist;