import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import Receipt from '@material-ui/icons/Receipt';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import CancelOutlined from '@material-ui/icons/CancelOutlined';
import Settings from '@material-ui/icons/Settings';

export const SidebarData = [
  {
    title: 'Analytic',
    icon: <AssessmentIcon />,
    path: '/analytic',
  },
  {
    title: 'User',
    icon: <GroupIcon />,
    path: '/user',
  },
  {
    title: 'Gift',
    icon: <CardGiftcardOutlined />,
    path: '/gift',
  },
  {
    title: 'Transactions',
    icon: <Receipt />,
    path: '/transaction',
  },
  {
    title: 'Ranking',
    icon: <EmojiEvents />,
    path: '/ranking',
  },
  {
    title: 'Black List',
    icon: <CancelOutlined />,
    path: '/black-list',
  },
  {
    title: 'Config',
    icon: <Settings />,
    path: '/config',
  },
];
