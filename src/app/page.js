import { getFeaturedEvents } from "../../data/datasource"
import EventList from "./component/eventlist";


export default function HomePage() {
  const getdata = getFeaturedEvents();
  return (
    <div>
      <EventList eventlist={getdata} />
 </div>
  )
}
