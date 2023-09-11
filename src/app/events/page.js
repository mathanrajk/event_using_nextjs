"use client" 
import { useRouter } from "next/navigation";
import {getAllEvents} from "../../../data/datasource"
import EventList from "../component/eventlist";
import FilterEvents from "../component/filterevent/filter_events";
const AllEventsPage = () => {
    const allData = getAllEvents();
    const route = useRouter();
    function filterurl(year,month){
   const url=`events/${year}/${month}`
   route.push(url)
    }
    return (
        <div>
            <FilterEvents onfind={filterurl}/>
            <EventList eventlist={allData}/>
        </div>
    )
}
export default AllEventsPage; 