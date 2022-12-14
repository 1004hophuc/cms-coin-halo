import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Analytic from './Components/Analytic/Analytic';
import Blacklist from './Components/Blacklist';
import Config from './Components/Config';
import Gift from './Components/Gift';
import Ranking from './Components/Ranking';
import Sidebar from './Components/Sidebar/Sidebar';
import Transaction from './Components/Transaction';
import User from './Components/User';
import Login from './Pages/Login/Login';
import ErrorPage from './Components/ErrorPage';
import { useState } from 'react';
import DefaultLayout from './Layout/DefaultLayout';
import { privateRoutes } from '../src/Routes';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  // const [user, setUser] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     const result = axios.post('login', )
  //   } catch (error) {

  //   }
  // }, []);

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      {/* <Route element={user ? <DefaultLayout /> : <Login />}>
       */}
      <Route element={<DefaultLayout />}>
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route key={index}>
              <Route path={route.path} element={<Page />}></Route>
            </Route>
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
