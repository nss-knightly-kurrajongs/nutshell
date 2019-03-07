import React, { Component } from "react"
import { Route } from "react-router-dom"
import NewsManager from "../modules/NewsManager"
import NewsList from './news/NewsList'

import NewsDetail from './news/NewsDetail'

import NewsForm from './news/NewsForm';
import NewsEditForm from './news/NewsEditForm';
class ApplicationViews extends Component {
  state = {
      news: []
  }

  removeNews = (id) =>
  NewsManager.delete(id)
          .then(NewsManager.getAll)
          .then(news => this.setState({ news: news }))

  addNews = News => {
      return NewsManager.addNews(News)
          .then(() => NewsManager.getAll())
          .then(news =>
              this.setState({
                  news: news
              })
          )
  }

  updateNews = News => {
      return NewsManager.updateNews(News)
          .then(() => NewsManager.getAll())
          .then(news =>
              this.setState({
                  news: news
              })
          )
  }

  getAllNewsAgain = () =>
      NewsManager.getAll().then(news => this.setState({ news: news }))


  componentDidUpdate () {
  }

  componentDidMount() {
      const newState = {}

      NewsManager.getAll()
          .then(news => newState.news = news)
          .then(() => this.setState(newState))
  }

  render() {
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
                  return <NewsDetail
                      {...props}
                      removeNews={this.removeNews}
                      news={this.state.news} />
              }} />
              <Route path="/news/:newsId(\d+)/edit" render={props => {
                      return <NewsEditForm
                                  {...props}
                                  updateNews={this.updateNews}/>
                  }}
                  />
              <Route path="/news/new" render={(props) => {
                  return <NewsForm {...props}
                                  addNews={this.addNews}
                                  />
              }} />
          </React.Fragment>
      )
  }
}

export default ApplicationViews
