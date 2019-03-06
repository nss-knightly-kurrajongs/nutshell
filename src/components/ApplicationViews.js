import React, { Component } from "react"
import { Route } from "react-router-dom"
import MovieList from "./movies/MovieList"
import MovieForm from "./movies/MovieForm"
import MovieManager from "."

class ApplicationViews extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
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

                    />

                }} />
                <Route path="/movies/new" render={(props) => {
                    return <MovieForm {...props}
                        addMovie={this.addMovie}
                        movies={this.state.movies} />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews
