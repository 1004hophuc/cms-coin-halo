import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Components/Sidebar/Sidebar';
import styled from 'styled-components';
let count = 0;
const DefaultLayout = () => {
  count++;
  console.log('count: ', count);
  return (
    <WrapLayout>
      <Sidebar />
      <Outlet />
    </WrapLayout>
  );
};

const WrapLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export default DefaultLayout;
