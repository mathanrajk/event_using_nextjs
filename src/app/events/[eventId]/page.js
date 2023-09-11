import EventFullDetails from "@/app/component/event_details"
import {getEventById} from "../../../../data/datasource"
export default function EventDetailPage({params}){
const currentEvent = getEventById(params.eventId)
    return(
        <div>
       <EventFullDetails item={currentEvent}/>
        </div>
    )
}

