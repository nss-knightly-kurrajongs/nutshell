import React, { Component } from "react"
import { Route } from "react-router-dom"

import Chat from './chat/Chat'
import ChatList from './chat/ChatList'
import ChatForm from './chat/ChatForm'
import ChatFormEdit from './chat/ChatFormEdit'
import ChatManager from '../modules/ChatManager'
import UserManager from '../modules/UserManager'


class ApplicationViews extends Component {

state = {
  users: [],
  chats: []
}


addChat = (chat) => {
  return ChatManager.addChat(chat)
  .then(() => ChatManager.getAll())
  .then(chats => this.setState({
      chats: chats
    })
  )
}

updateChat = (chat) => {
  return ChatManager.updateChat(chat)
  .then(() => ChatManager.getAll())
  .then(chats => this.setState({
      chats: chats
    })
  )
}

deleteChatMessage = (id) => {
  fetch(`http://localhost:8088/chats/${id}`, {
  "method": "DELETE"
  })
  .then(() => fetch("http://localhost:8088/chats?_expand=user"))
  .then(r => r.json())
  .then(chats => this.setState({ chats: chats }))
}

componentDidMount() {
  console.log("componentDidMount -- ApplicationViews")

  const newState = {}
      ChatManager.getAll()
      .then(chats => newState.chats = chats)

      .then(() => this.setState(newState))
}



  render() {
    console.log("render -- ApplicationViews")
    console.log(this.props.activeUser)
    return (
<<<<<<< HEAD
      <React.Fragment>
        <Route path="/chats" render={(props) => {
          return <React.Fragment>
                  <ChatList {...props}
                    chats={this.state.chats}
                    users={this.state.users}
                    deleteChatMessage={this.deleteChatMessage}/>
                  <ChatForm {...props}
                    chats={this.state.chats}
                    addChat={this.addChat}/>
                 </React.Fragment>
                }} />

                 <Route path="/chats/:chatId(\d+)/edit" render={props => {

                   return <ChatFormEdit {...props}
                       chats={this.state.chats}
                       updateChat={this.updateChat}/>

                }} />
          </React.Fragment>
        )
    }
=======
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/chats" render={(props) => {
                    return <ChatList animals={this.state.animals}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                dischargeAnimal={this.dischargeAnimal}
                                loadAnimals={this.getAllAnimalsAgain}
                                {...props}
                                />
                }} />
                <Route exact path="/events" render={(props) => {
                    return <EventList
                                animals={this.state.animals}
                                fireEmployee={this.fireEmployee}
                                employees={this.state.employees}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                />
                }} />
                <Route exact path="/newss" render={(props) => {
                    return <NewsList
                                animals={this.state.animals}
                                fireEmployee={this.fireEmployee}
                                employees={this.state.employees}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                />
                }} />
                <Route exact path="/tasks" render={(props) => {
                    return <TaskList
                                animals={this.state.animals}
                                fireEmployee={this.fireEmployee}
                                employees={this.state.employees}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                />
                }} />
                <Route exact path="/movies" render={(props) => {
                    return <MovieList
                                animals={this.state.animals}
                                fireEmployee={this.fireEmployee}
                                employees={this.state.employees}
                                owners={this.state.owners}
                                animalOwners={this.state.animalOwners}
                                />
                }} />

            </React.Fragment>
        )
  }
>>>>>>> master
}

export default ApplicationViews
