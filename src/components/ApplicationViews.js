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
}

export default ApplicationViews
