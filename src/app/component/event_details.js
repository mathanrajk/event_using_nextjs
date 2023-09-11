import React from 'react'
import classes from "./eventdetails.module.css"
import DateIcon from './icons/date_icon';
import LocationIcon from './icons/location_icon'
function EventFullDetails(props) {
    const {item}=props;
    const humanReadble = new Date(item.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
  return (
    <div className={classes.pages} >
       <div className={classes.title}>{item.title}</div>
       <div className={classes.imagecontainer}>
        <img src={"/" + item.image} alt={item.title}></img>
       </div>
       <div className={classes.detailscontainer}>
        <div className={classes.details}>
            <h1 className={classes.bolder}>Description</h1>
        <p>{item.description}</p>
        <div className={classes.dateicon}>
                <div className={classes.respace}>
                <LocationIcon/>
                </div>
                <h1>{item.location}</h1>
                </div>
                <div className={classes.dateicon}>
                    <div className={classes.respace}>
                      <DateIcon/> </div>
                      <h1>{humanReadble}</h1>
                      </div>
        </div>
        
       </div>
    </div>
  )
}

export default EventFullDetails