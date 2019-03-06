import React, { Component } from "react"
import { Route } from "react-router-dom"
class ApplicationViews extends Component {
  state = {}
  componentDidMount() {}
  render() {
    console.log(this.props.activeUser)
    return (
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
}

export default ApplicationViews
