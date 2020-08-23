import React, { Component } from 'react';
import DialogBox from './dialogbox'

class toDoListElement extends Component {
    state = {
        
        
    } 

    // this is needed as a middle ground for the passing of data from dialog to todolist
    handleSetEditedTaskState = (editedTask) =>{
        this.props.onEditTask(this.props.element.id,editedTask)
    }

    render() { 
        let taskDescriptionStyle = {
            color: "black",
            padding: "40px",
            width:"100px",
            fontFamily: "Arial"
            
        }

        const checkBoxStyle = {
            width:"200px"
        }
        return (
            <div>
                <div>
                <span id="guessField" 
                    style={taskDescriptionStyle}
                    type="text" > {this.props.element.task} </span>

                    <input type="checkbox"/>
                    <label className="inline-block m-2">Completed</label>
                    <button className="btn btn-danger btn-sm" 
                    onClick={() => this.props.onDelete(this.props.element.id)}
                    > Delete </button>

                    <button className="btn btn-success btn-sm m-1"
                    onClick={() => this.props.onOpenEditTask(this.props.element.id)}> 
                    Edit </button>

                    <div>
                        <DialogBox 
                        editorOpen={this.props.element.taskEditorOpen}
                        taskId={this.props.element.id}
                        editedTask={this.editedTask}
                        task={this.props.element.task}
                        onClose={() => this.props.onCloseEditTask(this.props.element.id)}
                        onEditTask ={this.handleSetEditedTaskState}
                        />
                    </div>


                </div>

            </div>


          );
        }

    }

    

 
export default toDoListElement;