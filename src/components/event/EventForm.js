import React, { Component } from "react";




export default class EventForm extends Component {
    state = {
        eventName: "",
        eventDate: "",
        eventLocation: ""
    };
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    constructNewEvent = evt => {
        evt.preventDefault();
        const event = {
            eventName: this.state.eventName,
            eventDate: this.state.eventDate,
            eventLocation: this.state.eventLocation
        };
        this.props
            .addEvent(event)
            .then(() => this.props.history.push("/events"))
    };
    render() {
        return (
            <React.Fragment>
                <form className="eventForm">
                    <div className="event-form-group">
                        <label htmlFor="eventName">Event Name:</label>
                        <input
                            type="text"
                            required
                            className="event-form-control"
                            onChange={this.handleFieldChange}
                            id="eventName"
                            placeholder="Event Name"
                        />
                    </div>
                    <div className="event-form-group">
                        <label htmlFor="eventDate">Event Date:</label>
                        <input
                            type="text"
                            required
                            className="event-form-control"
                            onChange={this.handleFieldChange}
                            id="eventDate"
                            placeholder="Event Date"
                        />
                    </div>
                    <div className="event-form-group">
                        <label htmlFor="eventLoaction">Event Location:</label>
                        <input
                            type="text"
                            required
                            className="event-form-control"
                            onChange={this.handleFieldChange}
                            id="eventLocation"
                            placeholder="Event location"
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEvent}
                        className="btn btn-primary"
                    >
                        submit
                </button>
                </form>
            </React.Fragment>
        )
    }
}