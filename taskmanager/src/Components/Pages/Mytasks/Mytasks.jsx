import React from 'react'
import Tasks from '../../Common/Tasks/Tasks'
import './Mytasks.css'

const Mytasks = () => {
  return (
    <div className='mytasks'>
      <div className='main-content'>

          <div className='parent-content'>
              <h3>My Tasks</h3>
              {/* <MdWavingHand/> */}
          </div>

          <div className='content'>
              <div className='content-left'>
                <div className='content-left-parent'>
                    <div className='content-left-tasks'>
                    <Tasks/>
                    </div>

                  <div className='content-left-tasks'>
                    <Tasks/>
                    
                  </div>
                  <div className='content-left-tasks'>
                    <Tasks/>
                    
                  </div>
                  <div className='content-left-tasks'>
                    <Tasks/>
                    
                  </div>
                  <div className='content-left-tasks'>
                    <Tasks/>
                    
                  </div>

                </div>

              </div>

              {/* <div className='content-right'>
                <div className='content-right-parent'>

                  <TasksView/>

                </div>

              </div> */}

          </div>

          
      </div>
     {/* <Tasks/> */}
    </div>
  )
}

export default Mytasks