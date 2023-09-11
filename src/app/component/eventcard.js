"use client"
import{useRouter}from "next/navigation"
import React from 'react'
import classes from "./eventcard.module.css"
import Link from 'next/link';
import ArrowIcon from './icons/arrow_icon';
import DateIcon from './icons/date_icon';
import LocationIcon from './icons/location_icon';
function EventCard(props) {
    const { id, title, image, description, location, date } = props;
    const humanReadble = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric"
    })
    const route = useRouter()
    
    const exploreLink = `/events/${id}`
    console.log(exploreLink)
    return (
        <div className={classes.card}>
            <div className={classes.imagecontainer}>
                <img src={image} alt={title}></img>
            </div>
            <div className={classes.detailcontainer}>
                <h1>{title}</h1>
                <div className={classes.dateicon}>
                <div className={classes.respace}>
                <LocationIcon/>
                </div>
                <h1>{location}</h1>
                </div>
                <div className={classes.dateicon}>
                    <div className={classes.respace}>
                      <DateIcon/> </div>
                      <h1>{humanReadble}</h1>
                      </div>
                <Link href={exploreLink} className={classes.button}> Explore Event<div className={classes.space}><ArrowIcon /></div> </Link>

            </div>

        </div>
    )
}

export default EventCard