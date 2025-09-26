import React from 'react'
import './Dashboard.css'
// import { MdWavingHand } from "react-icons/md";
import { LiaTasksSolid } from "react-icons/lia";
import { AiOutlineFileDone } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import Tasks from '../../Common/Tasks/Tasks';
import todo from '/home/karunakar/VS Projects/TaskManagerFE/taskmanager/src/assets/todo-txt-svgrepo-com.svg';
import Status from '../../../assets/checklist.png';
import AddTaskIcon from '../../../assets/add.png';
import wave from '../../../assets/wave.png'
import { TiDocumentAdd } from "react-icons/ti";


const Dashboard = () => {
  return (
    <div className='dashboard'>
          <div className='main-content'>
               <div className='parent-content'>
                    <h3>Welcome back, Sundar</h3>
                    <img src={wave}></img>
                    {/* <MdWavingHand/> */}
               </div>

               <div className='child-content'>
                    <div className='tasks-card'> 
                         <div className='tasks-card-title'>
                              <div className='tasks-card-title-to-do'>
                                   {/* <LiaTasksSolid/> */}
                                   <img src={todo} alt="Hand Icon"/>
                                   To-Do
                              </div>

                              <div className='tasks-card-title-to-do-add-task'>
                                   <TiDocumentAdd/>
                                   {/* <img src={AddTaskIcon} alt="Hand Icon" className='add-icon'/> */}
                                  Add Task
                              </div>
                              
                         </div>
                         <div className='tasks-list'>
                              <div className='task-todo'>
                                   <Tasks/>
                              </div>

                              <div className='task-todo-1'>
                                   <Tasks/>
                              </div>

                              <div class="task-line"></div>
                              
                              <div className='task-inprogress'>
                                   <Tasks/>
                              </div>

                              <div className='task-inprogress-1'>
                                   <Tasks/>
                              </div>


                         </div>



                    </div>

                    <div className="right-section">

                         <div className='tasks-status'> 

                              <div className='tasks-status-title'>
                                   {/* <AiOutlineFileDone/> */}
                                   <img src={Status} alt="Hand Icon"/>
                                   Task Status
                              </div>
                         
                         </div>


                         <div className='tasks-completed'> 

                              <div className='tasks-completed-title'>
                                   {/* <AiOutlineFileDone/> */}
                                   <img src={Status} alt="Hand Icon"/>
                                   Completed Tasks
                              </div>

                              <div className='tasks-completed-card'>
                                   <Tasks/>
                              </div>

                              <div className='tasks-completed-card'>
                                   <Tasks/>
                              </div>

                              <div className='tasks-completed-card'>
                                   <Tasks/>
                              </div>
                         
                         </div>

                    </div>

               </div>

          </div>
    
    </div>
  )
}

export default Dashboard