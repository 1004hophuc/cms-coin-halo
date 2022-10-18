import React, { Fragment } from 'react';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import Receipt from '@material-ui/icons/Receipt';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import CancelOutlined from '@material-ui/icons/CancelOutlined';
import Settings from '@material-ui/icons/Settings';

import '../Home/Home.css';
import { Outlet } from 'react-router-dom';

export const SidebarData = [
  {
    title: 'Analytics',
    icon: <AssessmentIcon />,
    link: '/analytics',
  },
  {
    title: 'User',
    icon: <GroupIcon />,
    link: '/user',
  },
  {
    title: 'Gift',
    icon: <CardGiftcardOutlined />,
    link: '/gift',
  },
  {
    title: 'Transactions',
    icon: <Receipt />,
    link: '/transaction',
  },
  {
    title: 'Ranking',
    icon: <EmojiEvents />,
    link: '/ranking',
  },
  {
    title: 'Black List',
    icon: <CancelOutlined />,
    link: '/ranking',
  },
  {
    title: 'Config',
    icon: <Settings />,
    link: '/config',
  },
];

const Home = () => {
  // Gọi sự kiện cuộn lên top mỗi khi vào trang
  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   return () => {};
  // });

  return (
    <Fragment>
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
      <Outlet />
    </Fragment>
  );
};

export default Home;
