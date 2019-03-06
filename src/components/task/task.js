import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews"

export default class TaskAddForm extends Component {

    state={
        userId : "",
        taskName: "",
        dateToComplete: "",
        completed: false
    }
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      makeNewTask = evt => {
          evt.preventDefault();

          const newTask ={
            userId = this.state.userId,
            taskName: this.state.taskName,
            dateToComplete = this.state.dateToComplete,
            completed = false
          }
      }

      render(){
          return(
            <React.Fragment>


            </React.Fragment>
          )

      }
}