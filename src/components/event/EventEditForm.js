import React, { Component } from "react"
import EventManager from "../../modules/EventManager";


export default class EventEditForm extends Component {
    state = {
        eventName: "",
        eventLocation: "",
        eventDate: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEvent = evt => {
        evt.preventDefault()

        const editedEvent ={
            id: this.props.match.params.eventId,
            eventName: this.state.eventName,
            eventLocation: this.state.eventLocation,
            eventDate: this.state.eventDate
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
                eventDate: event.eventDate
              });
            });
          }
          render() {
              return (
                  <React.Fragment>
                      
                  </React.Fragment>
              )
          }
}