"use client" 
import React,{useRef} from 'react'
import classes from "./filter.module.css"
function FilterEvents(props) {
    const yearRef = useRef();
    const monthRef = useRef();
function submithandler(event){
    event.preventDefault()
    const selectyear = yearRef.current.value;
    const selectmonth = monthRef.current.value;
  props.onfind(selectyear,selectmonth)
}

  return (
    <div className={classes.main}>
        <form onSubmit={submithandler}>
            <div className={classes.formchild}>
                <div className={classes.year}>
                    <label className={classes.label} htmlFor='year'>Year</label>
                    <select id ="year" ref={yearRef}>
                        <option value={"2021"}>2021</option>
                        <option value={"2022"}>2022</option>
                    </select>

                </div>
                <div className={classes.year}>
                    <label htmlFor='month' className={classes.label}>Month</label>
                    <select id ="year" ref={monthRef}>
                        <option value={"1"}>January</option>
                        <option value={"2"}>February</option>
                        <option value={"3"}>March</option>
                        <option value={"4"}>April</option>
                        <option value={"5"}>May</option>
                        <option value={"6"}>June</option>
                        <option value={"7"}>July</option>
                        <option value={"8"}>August</option>
                        <option value={"9"}>September</option>
                        <option value={"10"}>October</option>
                        <option value={"11"}>November</option>
                        <option value={"12"}>December</option>
                    </select>

                </div>
                <div className={classes.year}>
                   <button className={classes.button} >Find event</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FilterEvents