import EventList from "@/app/component/eventlist";
import{getFilteredEvents} from "../../../../data/datasource"
export default function FilteredEventsPage({params}){
    console.log(params.slug)
    if(!params.slug){
        return(
            <p> loading ...</p>
        )
    }
    const year  = +params.slug[0];
    const month = +params.slug[1]
    if(isNaN(year)||isNaN(month)||year>2030||month<1 ||year<2021 || month>12){
        return(<p>
        Invaild filter .please adjust the value.
        </p>)
    }
const filterdata =getFilteredEvents({
    year:year,
    month:month
})
if(!filterdata || filterdata.length ===0){
return(
    <p>
        No Records founded ...!
    </p>
)
}
    return(
        <div>
       <EventList eventlist ={filterdata}/>
        </div>
    )
}
 