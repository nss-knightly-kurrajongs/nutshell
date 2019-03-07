import React, { Component } from "react"
import { Route } from "react-router-dom"
import TaskList from "./task/TaskList"
import taskManager from "../modules/taskManager"
import TaskAddForm from "./task/taskAddForm";
import TaskEditForm from "./task/taskEditForm"

class ApplicationViews extends Component {
    state = {
        tasks:[]
    }
    addTask = task => {
        return taskManager.addTask(task)
        .then(()=>{
            return taskManager.getAll()
        })
        .then(tasks =>
            this.setState({
                tasks:tasks
            }))
    }
    getTaskToEdit=(id)=>{
        return taskManager.get(id)
        .then(task =>
            this.setState({
                task: task
            })
        )
    }
    editUpdatedTask=(task)=>{
        // console.log("task: ", task)
        return taskManager.updateTask(task)
        .then(()=>{
            return taskManager.getAll()
        })

        .then(tasks =>
            this.setState({
                tasks:tasks
            }))
    }
    componentDidMount() {
        const newState={}

        taskManager.getAll()
        .then((tasks)=>newState.tasks = tasks)
        .then(() => this.setState(newState))
     }

    render() {
        return (
            <React.Fragment>
                {/* <Route exact path="/" render={(props) => {
                    return <TaskList
                        tasks={this.state.tasks}
                        {...props}/>
                }} /> */}

                <Route exact path="/tasks" render={(props) => {
                    return <TaskList
                        tasks={this.state.tasks}
                        {...props}/>
                }} />
                <Route exact path="/tasks/form" render={(props) => {
                    return <TaskAddForm
                        tasks={this.state.tasks}
                        addTask={this.addTask}
                        {...props}/>
                }} />
                <Route exact path="/tasks/editForm/:taskId(\d+)" render={(props) => {
                    return <TaskEditForm
                        task={this.state.task}
                        getTaskToEdit={this.getTaskToEdit}
                        editUpdatedTask={this.editUpdatedTask}
                        {...props}/>
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
