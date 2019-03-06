import React, { Component } from "react";
import ApplicationViews from "../ApplicationViews"
import taskManager from ".../taskManager"

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
      }

      makeNewTask = evt => {
          evt.preventDefault();

          if (this.state.taskName === "") {
            window.alert("Please enter a task");
          } else if(this.state.dateToComplete === ""){
              window.alert("enter an expected completion date")
          }else
          {
          const newTask = {
            userId: parseInt(this.state.userId),
            taskName: this.state.taskName,
            dateToComplete: this.state.dateToComplete,
            completed: false
          }
        this.props.taskManager.addTask(newTask)
        .then(()=>this.props.history.push("./taskList")))
    }


      render(){
          return(
            <React.Fragment>
                <form class="form-new-task">
                    <div className="form-group">

                    </div>
                </form>

            </React.Fragment>
          )

      }
}