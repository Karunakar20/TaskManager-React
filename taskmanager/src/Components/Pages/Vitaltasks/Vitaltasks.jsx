import React from 'react'
import './Vitaltasks.css'
import Tasks from '../../Common/Tasks/Tasks';
import TasksView from '../../Common/Tasks/TasksView';

const Vitaltasks = () => {
  return (
    <div className='vital-tasks'>
      <div className='main-content'>

          <div className='parent-content'>
              <h3>Vital Tasks</h3>
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

export default Vitaltasks