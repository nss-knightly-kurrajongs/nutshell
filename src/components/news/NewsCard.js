import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './News.css'

class NewsCard extends Component {

    render() {

        return (
            <React.Fragment>
                <div key={this.props.news.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <div>{this.props.news.newsTitle}</div>
                            <div>{this.props.news.synopsis}</div>
                            <div>{this.props.news.url}</div>
                            <div>{this.props.news.timeStamp}</div>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/news/${this.props.news.id}/edit`);
                                }}
                                >
                                Edit
                            </button>

                            {
                                (this.props.hasOwnProperty("deleteNews"))
                                    ? <button
                                        onClick={() => this.props.deleteNews(this.props.news.id)}
                                        className="card-link">Delete</button>
                                    : null
                            }

                        </h5>
                    </div>
                    <Link className="nav-link" to={`/news/${this.props.news.id}`}>Details</Link>
                </div>

            </React.Fragment>
        )
    }
}

export default NewsCard