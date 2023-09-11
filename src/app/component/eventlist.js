import React from 'react'
import EventCard from './eventcard';
import classes from "./eventlist.module.css"

function EventList(props) {
    const{eventlist}=props;
  return (
    <div className={classes.view}>
         {eventlist.map((item,index)=>{
        return(
          <EventCard key={index} id={item.id}title={item.title}image={item.image}description={item.description}location={item.location}date={item.date}/>
        )
      })}
    </div>
  )
}

export default EventList