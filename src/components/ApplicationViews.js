import React, { Component } from "react"
import { Route } from "react-router-dom"
import MovieList from "./movies/MovieList"
import MovieForm from "./movies/MovieForm"
import MovieDetail from "./movies/MovieDetail"
import MovieManager from "../modules/MovieManager"

class ApplicationViews extends Component {
    state = {
        movies: [],
        leadActor: [],
        yearReleased: []
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
         fetch("http://localhost:8088/movies")
                    .then(r => r.json())
                    .then(movies => this.setState({ movies: movies }))
            }



    componentDidMount() {

        const newState = {}
        console.log("componentDidMount -- ApplicationViews")

        MovieManager.getAll()
            .then(movies => newState.movies = movies)
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

                    />

                }} />
                <Route path="/movies/new" render={(props) => {
                    return <MovieForm {...props}
                        addMovie={this.addMovie}
                        movies={this.state.movies}
                        />
                }} />
                 {/* <Route path="/movies/:movieId(\d+)" render={(props) => {
                    return <MovieDetail {...props} deleteMovie={this.deleteMovie} movie={this.state.movie} />
                }} /> */}

            </React.Fragment>
        )
    }
}

export default ApplicationViews
