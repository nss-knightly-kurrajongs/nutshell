import React, { Component } from "react";
import "./News.css";

export default class NewsForm extends Component {
  // Set initial state
  state = {
    newsTitle: "",
    synopsis: "",
    url: "",
    timestamp: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    debugger;
    this.setState(stateToChange);
  }

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewNews = evt => {
    evt.preventDefault()
    
      const news = {
        newsTitle: this.state.newsTitle,
        synopsis: this.state.synopsis,
        url: this.state.url,
        timestamp: this.state.timestamp,
        // Make sure the employeeId is saved to the database as a number since it is a foreign key.
        userId: parseInt(this.state.userId)

      }
      // Create the animal and redirect user to animal list
      this.props
        .addNews(news)
        .then(() => this.props.history.push("/news"));
  }

  render() {
    return (
      <React.Fragment>
        <form className="newsForm">
        <div className="form-group">
            <label htmlFor="newsTitle">News Title</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="newsTitle"
              value={this.state.newsTitle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="synopsis">synopsis</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="synopsis"
              value={this.state.synopsis}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">url</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="url"
              value={this.state.url}
            />
          </div>
          <div className="form-group">
            <label htmlFor="timestamp">timestamp</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="timestamp"
              value={this.state.timestamp}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId">userId</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="userId"
              value={this.state.userId}
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewNews}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}