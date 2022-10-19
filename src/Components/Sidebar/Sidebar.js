import React from 'react';
import './Sidebar.css';

import { SidebarData } from '../../utils/SidebarData';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        {SidebarData.map((item, key) => {
          return (
            <NavLink
              key={key}
              className={({ isActive }) => (isActive ? 'rowActive' : 'row')}
              to={item.path}
            >
              <div id='icon'>{item.icon}</div>
              <div id='title'>{item.title}</div>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
