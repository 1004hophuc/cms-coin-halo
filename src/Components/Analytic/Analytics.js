import React from 'react';
import Sidebar from '../Sidebar';
import './Analytic.css';
import AssessmentIcon from '@material-ui/icons/Assessment';
import GroupIcon from '@material-ui/icons/Group';
import CardGiftcardOutlined from '@material-ui/icons/CardGiftcardOutlined';
import Receipt from '@material-ui/icons/Receipt';
import EmojiEvents from '@material-ui/icons/EmojiEvents';
import CancelOutlined from '@material-ui/icons/CancelOutlined';
import Settings from '@material-ui/icons/Settings';

function Analytics() {
  return (
    <div className='analytics-container'>
      <Sidebar />
      <div className='container-component'>
        <div className='title'>
          <h1>COIN HALO</h1>
        </div>
        <div class='testimonials'>
          <div class='card'>
            <header class='card__header'>
              <div>
                <Receipt className='add-color-icon' />
              </div>
              <div className='card__header-title'>
                <h3>Total User</h3>
              </div>
              <div className='card__header-body'>
                <h3>200000000</h3>
              </div>
            </header>
          </div>

          <div class='card'>
            <header class='card__header'>
              <div>
                <Receipt className='add-color-icon' />
              </div>
              <div className='card__header-title'>
                <h3>Total Coin Buy</h3>
              </div>
              <div className='card__header-body'>
                <h3>200000000</h3>
              </div>
            </header>
          </div>

          <div class='card'>
            <header class='card__header'>
              <div>
                <Receipt className='add-color-icon' />
              </div>
              <div className='card__header-title'>
                <h3>Total Coin Buy</h3>
              </div>
              <div className='card__header-body'>
                <h3>200000000</h3>
              </div>
            </header>
          </div>

          <div class='card'>
            <header class='card__header'>
              <div>
                <Receipt className='add-color-icon' />
              </div>
              <div className='card__header-title'>
                <h3>Total Coin Buy</h3>
              </div>
              <div className='card__header-body'>
                <h3>200000000</h3>
              </div>
            </header>
          </div>

          <div class='card'>
            <header class='card__header'>
              <div>
                <Receipt className='add-color-icon' />
              </div>
              <div className='card__header-title'>
                <h3>Total Coin Buy</h3>
              </div>
              <div className='card__header-body'>
                <h3>200000000</h3>
              </div>
            </header>
          </div>

          <div class='card'>
            <header class='card__header'>
              <div>
                <Receipt className='add-color-icon' />
              </div>
              <div className='card__header-title'>
                <h3>Total Coin Buy</h3>
              </div>
              <div className='card__header-body'>
                <h3>200000000</h3>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
