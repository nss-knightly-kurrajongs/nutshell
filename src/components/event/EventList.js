import React, { Component } from "react";
import EventCard from "./Event";


export default class EventList extends Component {
    render () {
        return(
            <React.Fragment>
                <div className="addEventButton">
                <button type="button"
                onClick={()=> this.props.history.push("/events/new")}
                className="eventButton">
                Add Event
                </button>
                </div>
                <h1>Events</h1>
                    <section>
                        {
                            this.props.events.map(event =>
                                <EventCard key={event.id}
                                event={event}
                                user={this.props.users}
                                {...this.props}/>
                                )
                        }
                    </section>
            </React.Fragment>
        )
    }
}