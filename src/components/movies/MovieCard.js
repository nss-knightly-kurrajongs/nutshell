import React, { Component } from "react"
import { Link } from "react-router-dom"



export default class MovieCard extends Component {
    render() {
        return (
            <div key={this.props.movie.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">

                        {this.props.movie.name}
                        <Link className="nav-link" to={`/animals/${this.props.movie.id}`}>Details</Link>
                        <a href="#"
                            onClick={() => this.props.deleteMovie(this.props.movie.id)}
                            className="card-link">Delete</a>
                    </h5>
                </div>
            </div>
        )
    }
}