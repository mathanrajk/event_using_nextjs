import React from 'react'
import classes from "./header.module.css"
import Link from 'next/link'
function Header() {
  return (
    <div className={classes.header}>
        <Link href={"/"}>Next Event </Link>
        <Link href={"/events"}> All Event</Link>
    </div>
  )
}

export default Header