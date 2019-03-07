import Settings from "./Settings";


export default {
    get(id) {
      return fetch(`${Settings.remoteURL}/events/${id}`).then(e => e.json())
    },
    getAll() {
      return fetch(`${Settings.remoteURL}/events`).then(e => e.json())
    },
    addNewEvent(newEvent) {
        return fetch(`${Settings.remoteURL}/events`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEvent)
        }).then(data => data.json())
    },
updateEvent(editedEvent) {
  return fetch(`${Settings.remoteURL}/news/${editedEvent.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedEvent)
  }).then(data => data.json());
}
}