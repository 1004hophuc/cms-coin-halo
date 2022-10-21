import React from 'react';
import './Analytic.css';
import 'antd/dist/antd.min.css';
// import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';

import MonetizationOn from '@material-ui/icons/MonetizationOn';
// import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import Receipt from '@material-ui/icons/Receipt';
// import EmojiEvents from '@material-ui/icons/EmojiEvents';
// import CancelOutlined from '@material-ui/icons/CancelOutlined';
// import Settings from '@material-ui/icons/Settings';

import { Card } from 'antd';

function Analytic() {
  return (
    <div className='container__analytic'>
      <Card
        title='TOTAL USER'
        extra={<GroupIcon />}
        style={{ width: 300, height: 250, margin: 20 }}
      >
        <p>Amount user to this point</p>
        <hr />
        <h1 style={{ textAlign: 'center', fontSize: 50, marginTop: 20 }}>
          170
        </h1>
      </Card>
      <Card
        title='TOTAL POINT EARN TODAY'
        extra={<MonetizationOn />}
        style={{ width: 300, height: 250, margin: 20 }}
      >
        <p>Total coins user earned today</p>
        <hr />
        <h1 style={{ textAlign: 'center', fontSize: 50, marginTop: 20 }}>
          3212.00
        </h1>
      </Card>
      <Card
        title='TOTAL WITHDRAW TODAY'
        extra={<Receipt />}
        style={{ width: 300, height: 250, margin: 20 }}
      >
        <p>Total withdraw of user today</p>
        <hr />
        <h1 style={{ textAlign: 'center', fontSize: 50, marginTop: 20 }}>
          412.00
        </h1>
      </Card>
      <Card
        title='TOTAL DEPOSIT TODAY'
        extra={<Receipt />}
        style={{ width: 300, height: 250, margin: 20 }}
      >
        <p>Total deposit of user today</p>
        <hr />
        <h1 style={{ textAlign: 'center', fontSize: 50, marginTop: 20 }}>
          412.00
        </h1>
      </Card>
      <Card
        title='Default size card'
        extra={<GroupIcon />}
        style={{ width: 300, height: 250, margin: 20 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}

export default Analytic;

/**
 *
 */
