import React, { Component } from "react";


export default class MovieForm extends Component {
  // Setting the initial state
  state = {
    movieName: "",
    leadActor: "",
    yearReleased: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating movie object, and
        invoking the function reference passed from parent component
     */
  constructNewMovie = evt => {
    evt.preventDefault();
    if (this.state.movie === "") {
      window.alert("Please select a caretaker");
    } else {
      const movie = {
        movieName: this.state.movieName,
        leadActor: this.state.leadActor,
        yearReleased: this.state.yearReleased

      };

      // Create the animal and redirect user to animal list
      this.props
        .addMovie(movie)
        .then(() => this.props.history.push("/movies"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="movieForm">
          <div className="form-group">
            <label htmlFor="movieName">Movie name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="movieName"
              placeholder="Movie name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
          </div>
          <div className="form-group">
            <label htmlFor="employee">Assign to caretaker</label>
            <select
              defaultValue=""
              name="movie"
              id="movieId"
              onChange={this.handleFieldChange}
            >
              <option value="">Select a Movie!</option>
              {this.props.movies.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            onClick={this.constructNewMovie}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}