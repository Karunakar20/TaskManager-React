import React from 'react'
import './TasksView.css'
import Bird from '/home/karunakar/VS Projects/TaskManagerFE/taskmanager/src/assets/bird.jpg';

const TasksView = () => {
  return (
    <div className='tasks-parent-content'>
      <div className='tasks-main'>
        <div className='tasks-main-title'>
          <img src={Bird} className='tasks-main-title-img'></img>
          <div className='titles'>

            <h5>Best Mobile Phones to Buy Now – Affordable, Powerful, and Packed with the Latest Features and low price</h5>
          <div className='priority'>
            <span className='id'>Priority: </span>
            <span className='value'> Extreme</span>

          </div>

          <div className='status'>
            <span className='id'>Status:</span>
            <span className='value'>Not Started</span>

          </div>

          <div className='created'>
            <span className='id'>Created on: 20/06/2023</span>

          </div>

          </div>
          
      
        </div>

        <div className='tasks-main-description'>

          <div className='description'>
            <span className='des-id'>Description: </span>
            <span className='des-value'>Review the list of documents required for submission and ensure all necessary documents are ready. Organize the documents accordingly and scan them if physical copies need to be submitted digitally. Rename the scanned files appropriately for easy identification and verify the accepted file formats. Upload the documents securely to the designated platform, double-check for accuracy, and obtain confirmation of successful submission. Follow up if necessary to ensure proper processing</span>

          </div>

        </div>

      </div>
    
    
    </div>
  )
}

export default TasksView