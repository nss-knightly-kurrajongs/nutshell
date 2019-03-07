import React, { Component } from "react"
import EventManager from "../../modules/EventManager";


export default class EventEditForm extends Component {
    state = {
        eventName: "",
        eventLocation: "",
        eventDate: "",
        userId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
        evt.preventDefault()

        const editedEvent = {
            id: this.props.match.params.eventId,
            eventName: this.state.eventName,
            eventLocation: this.state.eventLocation,
            eventDate: this.state.eventDate,
            userId: this.state.userId
        };

        this.props.updateEvent(editedEvent)
            .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
        EventManager.get(this.props.match.params.eventId)
            .then(event => {
                this.setState({
                    eventName: event.eventName,
                    eventLocation: event.eventLocation,
                    eventDate: event.eventDate,
                    userId: event.userId
                });
            });
    }
    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                    <div className="form-group">
                        <label htmlFor="eventName">Event Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.eventName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventLocation">Event Location</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="location"
                            value={this.state.eventLocation}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eventDate">Event Date</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.eventDate}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.updateExistingEvent}
                        className="btn btn-primary"
                    >
                        Submit
            </button>
                </form>
            </React.Fragment>
        )
    }
}