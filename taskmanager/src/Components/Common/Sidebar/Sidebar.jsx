import React from 'react';
import { sideBarData } from './sideBarData';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import Bird from '/home/karunakar/VS Projects/TaskManagerFE/taskmanager/src/assets/bird.jpg';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar-wrapper">
      {/* White top strip */}
      <div className="sidebar-header"></div>
      <div className='sideBar'>
        <img src={Bird} className='profile-photo' alt='Profile' />
        <div className='profile'>
          <h4>Karunakar Chavadam</h4>
          <h5>karunakarchavam@gmail.com</h5>
        </div>

        <div className='items'>
          {sideBarData.map((item, index) => {
            const Icon = item.icon;
            return (
              <ul key={index} className={item.cname}>
                <li>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? 'active-link' : 'not-active'
                    }
                  >
                    <Icon />
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default Sidebar;
