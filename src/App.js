import './App.css';
import React from 'react'
import AnalyticsCard from './components/AnalyticsCard';
import SideBar from './components/SideBar';
import TopNav from './components/TopNav';
import TopPageInfo from './components/TopPageInfo';
import Hero from './components/Hero';
import Table from './components/Table';
import Stats from './components/Stats';

import './dashforge/assets/css/dashforge.dashboard.css';
import './dashforge/assets/css/dashforge.css'

function App() {
  return (
    <div className='body'>
      <SideBar />
      <div className='content ht-100v pd-0'>
        <TopNav /> 
        <div className='content-body'>
          <div className='container pd-x-0'>
            <TopPageInfo Title={'Dashboard'}/>
            <Hero />
            <div className='row'> 
              <AnalyticsCard />
              <AnalyticsCard />
              <AnalyticsCard />                   
            </div>
            <div className='row align-self-stretch'> 
              <Table />  
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
