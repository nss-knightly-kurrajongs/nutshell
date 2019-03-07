import React, { Component } from "react"


export default class EventCard extends Component {
    render () {
        return (
            <div key={this.props.event.id} className="EventCard">
                <div className="event-card-body">
                  Event Name: {this.props.event.eventName}<br/>
                  Event Date: {this.props.event.eventDate}<br/>
                  Event Location: {this.props.event.eventLocation}
                </div>
                <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push(`/events/${this.props.event.id}/edit`);
                            }}
                             >
                            Edit
                        </button>
                <button
                onClick={() => this.props.deleteEvent(this.props.event.id)}
                className="event-card-link">Delete</button>
             </div>
        )
    }
}