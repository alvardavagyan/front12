import { useContext } from "react"
import { EventContext } from "../lib/Context"

export const EventList: React.FC = () => {
    const context = useContext(EventContext)
    if (!context) {
        throw new Error("Out of provider...")
    }
    const { state } = context
    return <>
        <h1>Event List</h1>
        <div className="list">
            {state.events.map(event => <div key={event.id}>
                <img src={event.cover}/>
                <p>{event.title}</p>
                <small>{event.type}by <strong>{event.composer}</strong></small>
                <p>{event.date}at{event.time}</p>
            </div>)
            }
        </div>
    </>
}