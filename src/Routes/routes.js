import Analytic from '../Components/Analytic/Analytic';
import Blacklist from '../Components/Blacklist';
import Config from '../Components/Config';
import ErrorPage from '../Components/ErrorPage';
import Gift from '../Components/Gift';
import Ranking from '../Components/Ranking';
import Transaction from '../Components/Transaction';
import User from '../Components/User';

export const privateRoutes = [
  { path: '/analytic', component: Analytic },
  { path: '/user', component: User },
  { path: '/gift', component: Gift },
  { path: '/transaction', component: Transaction },
  { path: '/ranking', component: Ranking },
  { path: '/black-list', component: Blacklist },
  { path: '/config', component: Config },
  { path: '*', component: ErrorPage },
];
