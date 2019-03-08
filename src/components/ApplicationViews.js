import React, { Component } from "react"
import { Route } from "react-router-dom"
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
        dateofEntry: []

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

    getMovieToEdit=(id) => {
        return MovieManager.get(id).then(movie => this.setState({
            movie: movie
        }))
    }

    editMovie=(movie)=> {
        return MovieManager.updateMovie(movie).then(() => {
            return MovieManager.getAll()
        }).then(movies => this.setState(
            {
                movies: movies
            }
        ))
    }



    componentDidMount() {

        const newState = {}
        console.log("componentDidMount -- ApplicationViews")

        MovieManager.getAll()
            .then(movies => newState.movies = movies).then(() => {
                this.setState(newState)
            })

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
                        return <MovieEditForm {...props} movies={this.state.movies} updateMovie={this.updateMovie} getMovieToEdit={this.getMovieToEdit} edit={this.editMovie}/>
                    }}
                />

            </React.Fragment>
        )
    }
}

export default ApplicationViews
