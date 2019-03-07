import React, { Component } from "react"
import { Route } from "react-router-dom"
import EventList from "./event/EventList";
import EventForm from "./event/EventForm";
import EventManager from "../modules/EventManager";
import UserManager from "../modules/UserManager";
import EventEditForm from "./event/EventEditForm";



class ApplicationViews extends Component {
    state = {
        events: [],
        users: []
    }

    addEvent = (event) => {
        return EventManager.addEvent(event)
            .then(() => EventManager.getAll())
            .then(events => this.setState({
                events: events
            }))
    }

    componentDidMount() {
        const newState = {}

        EventManager.getAll().then(allEvents => {
            this.setState({
                events: allEvents
            })
        })
        UserManager.getAll().then(allUsers => {
            this.setState({
                users: allUsers
            })
        })
            .then(() => this.setState(newState))
    }

    deleteEvent = id => {
        return fetch(`http://localhost:8088/events/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:8088/events`))
            .then(e => e.json())
            .then(events => this.setState({
                events: events
            })
            )
    }
    addEvent = event =>
        EventManager.addNewEvent(event)
            .then(() => EventManager.getAll())
            .then(events =>
                this.setState({
                    events: events
                })
            );
    updateEvent = (editedEventObject) => {
        return EventManager.updateEvent(editedEventObject)
            .then(() => EventManager.getAll())
            .then(events => {
                this.setState({
                    events: events
                })
            });
    };

    render() {
        console.log(this.props.activeUser)
        return (
            <React.Fragment>
                <Route exact path="/events" render={(props) => {
                    return <EventList
                        deleteEvent={this.deleteEvent}
                        events={this.state.events}
                        users={this.state.users}
                        {...props}
                    />
                }} />
                <Route path="/events/new" render={(props) => {
                    return <EventForm {...props}
                        addEvent={this.addEvent}
                    />
                }} />
                <Route
                    path="/events/:eventsId(\d+)/edit" render={props => {
                        return <EventEditForm {...props}
                            updateEvent={this.updateEvent} />
                    }}
                />

            </React.Fragment>
        )
    }
}

export default ApplicationViews
