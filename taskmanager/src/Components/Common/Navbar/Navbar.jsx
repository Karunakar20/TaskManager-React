import React from 'react'
import './Navbar.css'

import { IoIosSearch } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdNotificationsActive } from "react-icons/md";

const Navbar = () => {

  const today = new Date();

  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = today.toLocaleDateString("en-GB"); // DD/MM/YYYY
  return (
    <div className='main'>
      <div className='title'>
        <span className="first-half">Task </span>
        <span className="second-half">Manager</span>
      </div>
     <div className="global-search">
        <input type="search" placeholder="Search your task here..." />
        <IoIosSearch />
      </div>

      <div className='info-icons'>
        <SlCalender />
        <MdNotificationsActive />
      </div>

      <div className='other-info'>
        <span id='day'>{dayName}</span>
        <span id='date'>{formattedDate}</span>
      </div>


    </div>
  )
}

export default Navbar