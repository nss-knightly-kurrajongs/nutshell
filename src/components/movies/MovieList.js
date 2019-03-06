import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class AnimalList extends Component {
  render () {
      return (
          <React.Fragment>
              <div className="MovieButton">
                  <button type="button"
                          className="btn btn-success"
                          onClick={() => {
                              this.props.history.push("/movies/new")}
                          }>
                      new movie
                  </button>

              </div>
      <section className="movies">
        {
          this.props.movies.map(movie =>
            <MovieCard key={movie.id} movie={movie} {...this.props} />
        )
        }
      </section>
      </React.Fragment>
    )
  }
}