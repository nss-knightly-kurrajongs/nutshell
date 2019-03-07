import React, { Component } from "react"
import "./Animal.css"
import dog from "./DogIcon.png"


export default class news extends Component {
    render() {
        
        /*
            Using the route parameter, find the animal that the
            user clicked on by looking at the `this.props.animals`
            collection that was passed down from ApplicationViews
        */
        const news = this.props.newss.find(a =>
            a.id === parseInt(this.props.match.params.newsId))
             || {id:404, newsTitle:"404", synopsis: "Artical not found"}

        return (
            <section className="news">
                <div key={news.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {news.newsTitle}
                        </h4>
                        
                        <h6 className="card-title">{news.url}</h6>
                        <h5 className="card-title">{news.synopsis}{news.timeStamp}</h5>

                        <button
                            onClick={() =>
                                this.props.deleteNews(news.id)
                                    .then(() => this.props.history.push("/news"))
                            }
                            className="card-link">Delete</button>
                    </div>
                </div>
            </section>
        )
    }
}