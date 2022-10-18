import React, { Fragment } from 'react';

import { SidebarData } from '../utils/SidebarData';

const Sidebar = () => {
  // Gọi sự kiện cuộn lên top mỗi khi vào trang
  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   return () => {};
  // });

  return (
    <div className='sidebar'>
      <ul className='sidebar__list'>
        {SidebarData.map((value, key) => {
          return (
            <li
              className='row'
              id={window.location.pathname == value.link ? 'active' : ''}
              key={key}
              onClick={() => {
                window.location.pathname = value.link;
              }}
            >
              <div id='icon'>{value.icon}</div>
              <div id='title'>{value.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
