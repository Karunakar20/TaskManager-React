import React from 'react'
import './Tasks.css'
import { FaRegCircle } from "react-icons/fa";
import { PiDotsThreeOutlineLight } from "react-icons/pi";
import Bird from '/home/karunakar/VS Projects/TaskManagerFE/taskmanager/src/assets/bird.jpg';



const Tasks = () => {
  return (
    <div className='task-main'>
          <div className='task-main-title'>
            <div className='left'>
              <FaRegCircle id='circle'/>
              <h3>Best Mobile Phones to Buy Now – Affordable, Powerful, and Packed with the Latest Features and low price</h3>
            </div>
            <PiDotsThreeOutlineLight id='dots'/>
          </div>

          <div className='task-description'>
            <p>This project is designed to simplify daily task management with an intuitive interface. It allows users to create, edit, and prioritize tasks in a seamless way.The application supports categorizing tasks by deadlines and importance. A responsive design ensures it works smoothly across all devices. Users can track progress visually through status indicators and summaries. Collaboration features make it easy to share tasks with team members. Data is stored securely to maintain privacy and reliability. Overall, it enhances productivity and helps users stay organized effortlessly.</p>
            <div className='description-img'>
              <img src={Bird} ></img>
            </div>
          </div>

          <div className='task-more-info'>

            <h6>Prority: Low</h6>
            <h6>Status: New</h6>
            <h6>Created on: 15-10-2028</h6>


          </div>


    </div>
  )
}

export default Tasks