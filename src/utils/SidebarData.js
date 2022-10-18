import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import Receipt from '@material-ui/icons/Receipt';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import CancelOutlined from '@material-ui/icons/CancelOutlined';
import Settings from '@material-ui/icons/Settings';

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
