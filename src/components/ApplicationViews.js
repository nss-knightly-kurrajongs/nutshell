import React, { Component } from "react"
import { Route } from "react-router-dom"
// import EventList from "./event/EventList";
// import EventForm from "./event/EventForm";
// import EventManager from "../modules/EventManager";
// import UserManager from "../modules/UserManager";
// import EventEditForm from "./event/EventEditForm";
import TaskList from "./task/TaskList"
import taskManager from "../modules/taskManager"
import TaskAddForm from "./task/taskAddForm";
import TaskEditForm from "./task/taskEditForm"
// import Chat from './chat/Chat'
import ChatList from './chat/ChatList'
import ChatForm from './chat/ChatForm'
import ChatFormEdit from './chat/ChatFormEdit'
import ChatManager from '../modules/ChatManager'
import MovieList from "./movies/MovieList"
import MovieForm from "./movies/MovieForm"
import MovieManager from "../modules/MovieManager"
import MovieEditForm from "./movies/MovieEditForm"

class ApplicationViews extends Component {
  state = {
    movies: [],
    leadActor: [],
    yearReleased: [],
    id: [],
    userId: [],
    dateofEntry: [],
    tasks: [],
    chats: [],
    users: []

  }

  aUserId = this.props.activeUserId()



  addTask = task => {
    return taskManager.addTask(task)
      .then(() => {
        return taskManager.getAll(this.aUserId)

      })
      .then(tasks =>
        this.setState({
          tasks: tasks
        }))
  }
  getTaskToEdit = (id) => {
    return taskManager.get(id)
      .then(task =>
        this.setState({
          task: task
        })
      )
  }
  editUpdatedTask = (task) => {
    // console.log("task: ", task)
    return taskManager.updateTask(task)
      .then(() => {
        return taskManager.getAll(this.aUserId)
      })
      .then(tasks =>
        this.setState({
          tasks: tasks
        }))
  }

  addMovie = movie =>
    MovieManager.post(movie)
      .then(() => MovieManager.getAll())
      .then(movies =>
        this.setState({
          movies: movies
        })
      );

  deleteMovie = (id) => {
    return MovieManager.removeAndList(id)
      .then(movies => this.setState({
        movies: movies
      })
      )
  }

  getAllMoviesAgain = () => {
    fetch("http://localhost:8088/Movies")
      .then(r => r.json())
      .then(movies => this.setState({ movies: movies }))
  }

  updateMovie = (editedMovieObject) => {
    return MovieManager.put(editedMovieObject)
      .then(() => MovieManager.getAll())
      .then(movies => {
        this.setState({
          movies: movies
        })
      });
  };

  getMovieToEdit = (id) => {
    return MovieManager.get(id).then(movie => this.setState({
      movie: movie
    }))
  }

  editMovie = (movie) => {
    return MovieManager.updateMovie(movie).then(() => {
      return MovieManager.getAll()
    }).then(movies => this.setState(
      {
        movies: movies
      }
    ))
  }

  addChat = (chat) => {
    return ChatManager.addChat(chat)
      .then(() => ChatManager.getAll())
      .then(chats => this.setState({
        chats: chats
      })
      )
  }

  updateChat = (chat) => {
    return ChatManager.updateChat(chat)
      .then(() => ChatManager.getAll())
      .then(chats => this.setState({
        chats: chats
      })
      )
  }

  deleteChatMessage = (id) => {
    fetch(`http://localhost:8088/chats/${id}`, {
      "method": "DELETE"
    })
      .then(() => fetch("http://localhost:8088/chats?_expand=user"))
      .then(r => r.json())
      .then(chats => this.setState({ chats: chats }))
  }



  componentDidMount() {

    const newState = {}
    console.log("componentDidMount -- ApplicationViews")

    MovieManager.getAll()
      .then(movies => newState.movies = movies).then(() => {
        this.setState(newState)
      }).then(() => taskManager.getAll(this.aUserId))
      .then((tasks) => newState.tasks = tasks)
      .then(() => ChatManager.getAll())
      .then(chats => newState.chats = chats)
      .then(() => this.setState(newState))

  }




  render() {
    console.log(this.props.activeUser)
    return (
      <React.Fragment>

        <Route exact path="/movies" render={(props) => {
          return <MovieList
            {...props}
            movies={this.state.movies}
            deleteMovie={this.deleteMovie}
            loadMovies={this.getAllMovies}
            name={this.state.movieName}
            userId={this.state.userId}
            dateofEntry={this.state.dateofEntry}

          />

        }} />
        <Route path="/movies/new" render={(props) => {
          return <MovieForm {...props}
            addMovie={this.addMovie}
            movies={this.state.movies}
            userId={this.state.userId}
          />
        }} />

        <Route
          path="/movies/:movieId(\d+)/edit" render={props => {
            return <MovieEditForm {...props} movies={this.state.movies} updateMovie={this.updateMovie} getMovieToEdit={this.getMovieToEdit} edit={this.editMovie} />
          }}
        />
        <Route path="/chats" render={(props) => {
          return <React.Fragment>
            <ChatList {...props}
              chats={this.state.chats}
              users={this.state.users}
              deleteChatMessage={this.deleteChatMessage} />
            <ChatForm {...props}
              chats={this.state.chats}
              addChat={this.addChat} />
          </React.Fragment>
        }} />

        <Route path="/chats/:chatId(\d+)/edit" render={props => {

          return <ChatFormEdit {...props}
            chats={this.state.chats}
            updateChat={this.updateChat} />

        }} />
        {/* <Route exact path="/" render={(props) => {
                    return <TaskList
                        tasks={this.state.tasks}
                        {...props}/>
                }} /> */}

        <Route exact path="/tasks" render={(props) => {
          return <TaskList
            tasks={this.state.tasks}
            {...props} />
        }} />
        <Route exact path="/tasks/form" render={(props) => {
          return <TaskAddForm
            tasks={this.state.tasks}
            addTask={this.addTask}
            {...props} />
        }} />
        <Route exact path="/tasks/editForm/:taskId(\d+)" render={(props) => {
          return <TaskEditForm
            task={this.state.task}
            getTaskToEdit={this.getTaskToEdit}
            editUpdatedTask={this.editUpdatedTask}
            {...props} />
        }} />

      </React.Fragment>
    )
  }
}



export default ApplicationViews
