import React, { Component } from "react"
import { Route } from "react-router-dom"
import NewsManager from "../modules/NewsManager"
import NewsList from './news/'

import NewsDetail from './animal/AnimalDetail'

import NewsForm from './animal/AnimalForm';
import NewsEditForm from './animal/AnimalEditForm';
class ApplicationViews extends Component {
  state = {
    news: []
}

removeNews = (id) =>
    NewsManager.delete(id)
        .then(NewsManager.getAll)
        .then(news => this.setState({ news: news }))

addNews = news => {
    return NewsManager.addNews(news)
        .then(() => NewsManager.getAll())
        .then(newss =>
            this.setState({
              newss: newss
            })
        )
        
}

updateNews = news => {
    return NewsManager.updateNews(news)
        .then(() => NewsManager.getAll())
        .then(newss =>
            this.setState({
              newss: newss
            })
        )
}

getAllNewsAgain = () =>
    NewsManager.getAll().then(newss => this.setState({ newss: newss }))




componentDidMount() {
    const newState = {}

    NewsManager.getAll()
        .then(newss => newState.newss = newss)
}

render() {
    console.clear()
    console.log("render -- ApplicationViews")
    return (
        <React.Fragment>

            <Route exact path="/news" render={(props) => {
                return <NewsList news={this.state.news}
                            removeNews={this.removeNews}
                            loadNews={this.getAllNewsAgain}
                            {...props}
                            />
            }} />
            <Route exact path="/news/:newsId(\d+)" render={(props) => {
                console.log(props)
                return <NewsDetail
                    {...props}
                    removeNews={this.removeNews}
                    news={this.state.news} />
            }} />
            <Route path="//news/:newsId(\d+)/edit" render={props => {
                    return <NewsEditForm
                                {...props}
                                employees={this.state.employees}
                                updateNews={this.updateNews}/>
                }}
                />
            <Route path="/news/new" render={(props) => {
                return <NewsForm {...props}
                                addNews={this.addNews}
                                employees={this.state.employees} />
            }} />
        </React.Fragment>
    )
}
}
export default ApplicationViews
